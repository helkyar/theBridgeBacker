const router = require('express').Router();

router.get('/all', require('../controllers/getRolController'));
// router.use('', require(''));

module.exports = router;