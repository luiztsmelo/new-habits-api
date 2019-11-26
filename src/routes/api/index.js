const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/habits', require('./habits'));

module.exports = router;
