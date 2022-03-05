const router = require("express").Router();
router.get("/all", require("../controllers/getParticipantsConttoller"));
router.post("/add", require("../controllers/postParticipantsController"));

module.exports = router;
