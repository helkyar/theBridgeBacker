const router = require("express").Router();

router.get("/all", require("../controllers/getClassesController"));
// router.use('', require(''));

module.exports = router;
