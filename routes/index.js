const router = require('express').Router();
require('dotenv').config()
router.use('/user', require('./users'));
router.use('/course', require('./courses'));
// router.use('', require(''));

module.exports = router;