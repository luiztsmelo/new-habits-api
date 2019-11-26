const router = require('express').Router();
const Habit = require('../../models/habit');

router.route('/').get(async (req, res) => {
	try {
		const habits = await Habit.find();
		res.status(200).json(habits);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.route('/').post(async (req, res) => {
	try {
		const newHabit = new Habit(req.body);

		await newHabit.save();

		res.status(200).json(newHabit);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const habit = await Habit.findById(req.params.id);

		res.status(200).json(habit);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;
