const router = require('express').Router();
const User = require('../../models/user');

router.route('/').get(async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.route('/').post(async (req, res) => {
	try {
		const newUser = new User(req.body);

		await newUser.save();

		res.status(200).json(newUser);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		res.status(200).json(user);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;
