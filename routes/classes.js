const router = require("express").Router();

router.get("/all", require("../controllers/classes/getClasses"));
router.get("/id", require("../controllers/classes/getClass"));
router.get(
  "/courseid/:courseid",
  require("../controllers/classes/getCourseClass"),
);
router.post("/add", require("../controllers/classes/postClasses"));
router.patch("/update", require("../controllers/classes/patchClasses"));
router.delete("/delete", require("../controllers/classes/deleteClasses"));

module.exports = router;
