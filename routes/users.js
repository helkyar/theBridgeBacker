const router = require('express').Router();

router.get('/all', require('../controllers/getUsersController'));
router.post('/add', require('../controllers/postUserController'));
router.patch('/update', require('../controllers/patchUserController'));
// router.use('', require(''));

module.exports = router;