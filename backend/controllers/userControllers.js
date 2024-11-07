const User = require('../models/userModel.js');
const ErrorResponse = require('../utilities/errorResponse.js');
const generateToken = require('../utilities/generateToken.js');
const bcrypt = require('bcryptjs');

// Test that API is up and running
exports.sayHello = (req, res)=>{
	res.json({message: 'User controller is working'});
};

// Register user
exports.register = async(req, res, next)=>{
	const {username, password} = req.body;
	const userExists = await User.findOne({username});
	const usernameErrors=[];
	const passwordErrors=[];
	if(!username || username===''){
		usernameErrors.push('Please provide a username');
	}
	if(userExists){
		usernameErrors.push('Username already in use.');
	};
	if(!password || password===''){
		passwordErrors.push('Please provide a password');
	}
	if(password.length<12){
		passwordErrors.push('Password must be at least 12 characters.');
	};
	if(usernameErrors.length>0 || passwordErrors.length>0){
		return res.status(200).json({
			success: false,
			usernameErrors: usernameErrors,
			passwordErrors: passwordErrors
		});
	};
	try{
		const user = await User.create(req.body);
		generateToken(user, 201, res); // generateToken handles the res.status().cookie().json() call
	}catch(err){
		console.log('Error from backend register route', err);
		passwordErrors.push('Something went wrong. Please try again later.');
		res.status(200).json({
			success: false,
			usernameErrors: usernameErrors,
			passwordErrors: passwordErrors
		});
		next(err);
	};
};

// Log in user
exports.login = async(req, res, next)=>{
	try{
		const {username, password}=req.body;
		let usernameErrors=[];
		let passwordErrors=[];
		// Check if email and password were provided
		if(!username){
			usernameErrors.push('Please provide your username');
		};
		if(!password){
			passwordErrors.push('Please provide your password');
		};
		if(usernameErrors.length>0 || passwordErrors.length>0){
			return res.status(200).json({
				success: false,
				usernameErrors: usernameErrors,
				passwordErrors: passwordErrors
			});
		};
		// Find user by email address and verify user's password
		const user = await User.findOne({username});
		if(!user){
			passwordErrors.push('Invalid credentials provided.');
			return res.status(200).json({
				success: false,
				usernameErrors: usernameErrors,
				passwordErrors: passwordErrors
			});
		};
		// Verify user's password
		const doesPasswordMatch = await user.comparePassword(password);
		if(!doesPasswordMatch){
			passwordErrors.push('Invalid credentials provided.');
			return res.status(200).json({
				success: false,
				usernameErrors: usernameErrors,
				passwordErrors: passwordErrors
			});
		};
		generateToken(user, 200, res); // generateToken handles the res.status().cookie().json() call
	}catch(err){
		return next(new ErrorResponse(['Cannot perform login request at the moment. Please try again later.'], 400));
	};
};

// Log out user
exports.logout = async(req, res, next)=>{
	try{
		res.clearCookie('token');
		res.status(200).json({
			success: true,
			message: 'Goodbye! We hope to see you again soon.'
		});
	}catch(err){
		return next(new ErrorResponse(['Logout failed. Please try again.'], 400));
	};
};

// Get user profile
exports.getUser = async(req, res, next)=>{
	try{
		const user = await User.findById(req.user.id);
		res.status(200).json({
			success: true,
			user
		});
	}catch(err){
		return next(new ErrorResponse(['Could not find user. Please try again later.'], 404));
	};
};

// Update user profile
exports.updateUser = async(req, res, next)=>{
	const user = await User.findById(req.user.id);
	const oldUsername = req.user.username;
	const newUsername = req.body.usernameInputValue;
	const isUsernameInUse= async(newUsername)=>{
		const usedUsername = await User.findOne({username: newUsername});
		return usedUsername;
	};
	const usernameUsed = await isUsernameInUse(newUsername);
	if((oldUsername!==newUsername) && (newUsername!=='') && (usernameUsed===null)){
		try{
			const updateUser = await user.updateOne({username: newUsername}, {runValidators: true});
			const updatedUser = await User.findById(req.user.id);
			res.status(200).json({
				success: true,
				updatedUser
			});
		}catch(err){
			console.log('Error from backend updateUser route', err);
			next(err);
		};
	}else{
		if(newUsername===''){
			res.status(200).json({
				success: false,
				message: `Your username cannot be blank.`,
				user
			});
		}else if(oldUsername===newUsername){
			res.status(200).json({
				success: false,
				message: `Your username is already set as ${user.username}`,
				user
			});
		}else if(usernameUsed!==null){
			res.status(200).json({
				success: false,
				message: `${newUsername} is already in use by another user.`,
				user
			});
		};
	};
};

// Update user password
exports.updatePassword = async(req, res, next)=>{
	const user = await User.findById(req.user.id);
	const {oldPassword, newPassword} = req.body;
	const doesPasswordMatch = await user.comparePassword(oldPassword);
	if(!oldPassword && !newPassword){
		res.status(200).json({
			success: false,
			message: 'Please provide an old and new password.'
		});
	}else if(oldPassword==='' && newPassword===''){
		res.status(200).json({
			success: false,
			message: 'Please provide an old and new password.'
		});
	}else if((oldPassword || oldPassword!=='') && (!newPassword || newPassword==='')){
		res.status(200).json({
			success: false,
			message: 'Please provide a new password.'
		});
	}else if((!oldPassword || oldPassword==='') && (newPassword || newPassword!=='')){
		res.status(200).json({
			success: false,
			message: 'Please provide your old password.'
		});
	}else if(!doesPasswordMatch){
		res.status(200).json({
			success: false,
			message: 'The old password you provided is incorrect.'
		});
	}else if(doesPasswordMatch){
		try{
			user.password = newPassword;
			await user.save();
			generateToken(user, 201, res); // generateToken handles the res.status().cookie().json() call
		}catch(err){
			console.log('Password update error in backend updatePassword');
			next(err);
			console.log(err.errors.password.properties.message);
			res.status(200).json({
				success: false,
				message: err.errors.password.properties.message
			});
		};
	}else{
		console.log('Unknown error in backend updatePassword');
	};
};

// Change user's preferences preferences
exports.changeUserPreferences=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	const option=req.body.option;
	if(req.body.checked===true || req.body.checked===false){
		const checked=req.body.checked;
		try{
			if(option==='seconds'){
				user.showSeconds=checked;
			}else if(option==='period'){
				user.showPeriod=checked;
			}else if(option==='hour24'){
				user.show24HourClock=checked;
				if(checked===true){
					user.showPeriod=false;
				}else if(checked===false){
					user.showPeriod=true;
				};
			}else if(option==='dayName'){
				user.showDayName=checked;
			}else if(option==='monthName'){
				user.showMonthName=checked;
			}else if(option==='day'){
				user.showDay=checked;
			}else if(option==='year'){
				user.showYear=checked;
			}else if(option==='dateAndTime'){
				user.showDateAndTime=checked;
			}else if(option==='accountInMenubar'){
				user.showAccountInMenubar=checked;
			};
			await user.save();
			res.status(200).json({success: true, user});
		}catch(err){
			console.log('Error in changeClockPreferences backend controller', err);
		};
	}else if(option.includes('Thumbnail')){
		try{
			user.wallpaper=option;
			await user.save();
			res.status(200).json({success: true, user});
		}catch(err){
			console.log('Error in changeClockPreferences backend controller', err);
		};
	};
};
