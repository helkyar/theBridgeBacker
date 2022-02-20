const router = require('express').Router();

router.get('/all', require('../controllers/getUsersController'));
// router.use('', require(''));

module.exports = router;