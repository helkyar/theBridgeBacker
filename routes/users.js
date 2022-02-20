const router = require('express').Router();

router.get('/all-users', require('../controllers/getUsersController'));
// router.use('', require(''));

module.exports = router;