const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		required: [
			true,
			'Please input a username.'
		],
		unique: true,
		maxlength: 64
	},
	password: {
		type: String,
		trim: true,
		required:[
			true,
			'Please input a password.'
		],
		minlength: [
			12,
			'Your password must contain at least 12 characters.'
		]
	},
	showAccountInMenubar: {
		type: Boolean,
		default: true
	},
	showDateAndTime: {
		type: Boolean,
		default: true
	},
	showDayName: {
		type: Boolean,
		default: true
	},
	showMonthName: {
		type: Boolean,
		default: true
	},
	showDay: {
		type: Boolean,
		default: true
	},
	showYear: {
		type: Boolean,
		default: true
	},
	showSeconds: {
		type: Boolean,
		default: true
	},
	showPeriod: {
		type: Boolean,
		default: true
	},
	show24HourClock: {
		type: Boolean,
		default: false
	},
	wallpaper: {
		type: String,
		default: 'mountain8433234Thumbnail'
	},
	rttResults: [{
		type: Number
	}],
	otwResults: [{
		type: Number
	}],
	scResults: [{
		type: Number
	}],
	role: {
		type: Number,
		default: 0
	}
},
{
	timestamps: true
});

// Hash password using bcryptjs
userSchema.pre('save', async function(next){
	if(!this.isModified('password')){
		next();
	};
	this.password = await bcrypt.hash(this.password, 12);
});

// Verify password using bcryptjs
userSchema.methods.comparePassword = async function(providedPassword){
	return await bcrypt.compare(providedPassword, this.password);
};

// Get token using jsonwebtoken
userSchema.methods.jwtGenerateToken = function(){
	return jwt.sign({id: this.id}, process.env.JWT_SECRET, {expiresIn: 86400});
};

module.exports = mongoose.model('User', userSchema);
