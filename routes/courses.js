const router = require("express").Router();

router.get("/all", require("../controllers/courses/getCourses"));
router.get("/id/:id", require("../controllers/courses/getCourse"));
router.get("/user/:userid", require("../controllers/courses/getUserCourses"));
router.post("/add", require("../controllers/courses/postCourses"));
router.patch("/update", require("../controllers/courses/patchCourses"));
router.delete("/delete", require("../controllers/courses/deleteCourses"));

module.exports = router;