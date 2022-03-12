const router = require("express").Router();

router.post("/add", require("../controllers/usercourses/postUserCourses"));
router.get("/all", require("../controllers/usercourses/getUserCourses"));
// router.get("/id", require("../controllers/usercourses/getUserCourse"));
// router.patch("/update", require("../controllers/usercourses/patchUserCourses"));
// router.delete("/delete", require("../controllers/usercourses/deleteUserCourses"));

module.exports = router;
