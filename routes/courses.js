const router = require('express').Router();

router.get('/all', require('../controllers/getCoursesController'));
// router.use('', require(''));

module.exports = router;