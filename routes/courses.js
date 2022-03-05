const router = require("express").Router();

router.get("/all", require("../controllers/getCoursesController"));
router.post("/add", require("../controllers/postCoursesController"));
router.patch("/:id", require("../controllers/patchCoursesController"));
router.delete("/:id", require("../controllers/delCoursesController"));

module.exports = router;
