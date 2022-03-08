const router = require("express").Router();
require("dotenv").config();

router.use("/login", require("./login"));
router.use("/course", require("./courses"));
router.use("/user", require("./users"));
router.use("/roles", require("./roles"));
router.use("/class", require("./classes"));
router.use("/assist", require("./assist"));
router.use("/participants", require("./participants"));

// router.use('', require(''));

module.exports = router;
