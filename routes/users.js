const router = require('express').Router();

router.get('/all', require('../controllers/getUsersController'));
router.get('/id/:id', require('../controllers/getUserController'));
router.post('/add', require('../controllers/postUserController'));
router.patch('/update', require('../controllers/patchUserController'));
router.delete('/delete', require('../controllers/deleteUserController'));
// router.use('', require(''));

module.exports = router;