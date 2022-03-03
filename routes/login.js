const router = require("express").Router();

router.post("/", require("../controllers/checkLoginController"));
//same response for testing (shuld start using POSTMAN...)
router.get("/", require("../controllers/checkLoginController"));
// router.use('', require(''));

module.exports = router;
