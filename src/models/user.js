const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId },
		fullName: { type: String, default: '', required: true },
		email: { type: String, trim: true, default: '', required: true },
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
