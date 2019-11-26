const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		title: { type: String, maxlength: 80, required: true },
	},
	{
		timestamps: true,
	},
);

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
