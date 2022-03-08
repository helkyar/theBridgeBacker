const router = require("express").Router();

router.get("/all", require("../controllers/assists/getAssists"));
router.get("/id", require("../controllers/assists/getAssist"));
router.post("/add", require("../controllers/assists/postAssists"));
router.patch("/update", require("../controllers/assists/patchAssists"));
router.delete("/delete", require("../controllers/assists/deleteAssists"));

module.exports = router;
