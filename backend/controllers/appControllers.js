const axios = require('axios');
const User = require('../models/userModel.js');
const ErrorResponse = require('../utilities/errorResponse.js');

// Add a Reaction Time Test result to a user's User.rttResults array
exports.addRttResult=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	const reactionTime=req.body.reactionTime;
	try{
		await user.rttResults.push(reactionTime);
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend addRttResult route', err);
	};
};

// Clear a user's Reaction Time Test results history
exports.clearRttResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		user.rttResults=[];
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend clearRttResults route', err);
	};
};

// Sort a user's Reaction Time Test results history
exports.sortRttResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		const userRttResults=user.rttResults;
		const sortedUserRttResults=userRttResults.toSorted((a,b)=>a-b);
		user.rttResults=sortedUserRttResults;
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend sortRttResults route', err);
	};
};

// Add an Off The Wall result to a user's User.otwResults array
exports.addOtwResult=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	const numberOfMoves=req.body.numberOfMoves;
	try{
		await user.otwResults.push(numberOfMoves);
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend addOtwResult route', err);
	};
};

// Clear a user's Off The Wall results history
exports.clearOtwResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		user.otwResults=[];
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend clearOtwResults route', err);
	};
};

// Sort a user's Off The Wall results history
exports.sortOtwResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		const userOtwResults=user.otwResults;
		const sortedUserOtwResults=userOtwResults.toSorted((a,b)=>b-a);
		user.otwResults=sortedUserOtwResults;
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend sortOtwResults route', err);
	};
};

// Add an Speed Clicker result to a user's User.scResults array
exports.addScResult=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	const numberOfClicks=req.body.numberOfClicks;
	try{
		await user.scResults.push(numberOfClicks);
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend addScResult route', err);
	};
};

// Clear a user's Speed Clicker results history
exports.clearScResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		user.scResults=[];
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend clearScResults route', err);
	};
};

// Sort a user's Speed Clicker results history
exports.sortScResults=async(req, res, next)=>{
	const user=await User.findById(req.user.id);
	try{
		const userScResults=user.scResults;
		const sortedUserScResults=userScResults.toSorted((a,b)=>b-a);
		user.scResults=sortedUserScResults;
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend sortScResults route', err);
	};
};

// Merge guest-mode data into the authenticated user's account
exports.migrateGuestData=async(req, res, next)=>{
	try{
		const user=await User.findById(req.user.id);
		if(!user){
			return res.status(404).json({success: false, message: 'User not found'});
		};
		const {
			rttResults,
			otwResults,
			scResults,
			preferences,
			wallpaper
		}=req.body || {};
		if(Array.isArray(rttResults) && rttResults.length>0){
			user.rttResults=[...user.rttResults, ...rttResults];
		};
		if(Array.isArray(otwResults) && otwResults.length>0){
			user.otwResults=[...user.otwResults, ...otwResults];
		};
		if(Array.isArray(scResults) && scResults.length>0){
			user.scResults=[...user.scResults, ...scResults];
		};
		if(preferences && typeof preferences==='object'){
			const preferenceKeys=[
				'showAccountInMenubar',
				'showDateAndTime',
				'showDayName',
				'showMonthName',
				'showDay',
				'showYear',
				'showSeconds',
				'showPeriod',
				'show24HourClock'
			];
			preferenceKeys.forEach((key)=>{
				if(Object.hasOwn(preferences, key) && typeof preferences[key]==='boolean'){
					user[key]=preferences[key];
					if(key==='show24HourClock' && preferences[key]===true){
						user.showPeriod=false;
					};
				};
			});
		};
		if(typeof wallpaper==='string' && wallpaper.trim().length>0){
			user.wallpaper=wallpaper;
		};
		await user.save();
		res.status(200).json({success: true, user});
	}catch(err){
		console.log('Error in backend migrateGuestData route', err);
		next(err);
	};
};
