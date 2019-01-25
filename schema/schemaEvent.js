const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

var eventSchema = mongoose.Schema({
	type: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	titre: {
        type: String,
        required: true
	},
	date: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	desc: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	price: {
		type: Number,
		trim: true,
		required: true
	},
	img: {
		type: String,
		required: true
	},
},{ timestamps: { createdAt: 'created_at' }})


eventSchema.methods = {
	// authenticate: function (password) {
	// 	return passwordHash.verify(password, this.password);
	// },
	// getToken: function () {
	// 	return jwt.encode(this, config.secret);
	// }
}

module.exports = mongoose.model('Event', eventSchema);