const router = require('express').Router();

router.use('/', require('../controllers/home'));
// router.use('', require(''));

module.exports = router;