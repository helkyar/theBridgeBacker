const router = require('express').Router();

router.get('/all', require('../controllers/getUsersController'));
router.post('/post', require('../controllers/postUserController'));
// router.use('', require(''));

module.exports = router;