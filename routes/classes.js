const router = require("express").Router();

router.get("/all", require("../controllers/getClassesController"));

module.exports = router;
