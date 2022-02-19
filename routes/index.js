const router = require('express').Router();

router.use('/', require('../controllers/userController'));
// router.use('', require(''));

module.exports = router;