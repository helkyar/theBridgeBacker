const router = require("express").Router();
require("dotenv").config();

router.use("/login", require("./login"));
router.use("/course", require("./courses"));
router.use("/user", require("./users"));
router.use("/rol", require("./rol"));
router.use("/class", require("./classes"));
// router.use('', require(''));

module.exports = router;
