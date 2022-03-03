const router = require("express").Router();
router.get("/all", require("../controllers/getParticipantsConttoller"));
router.post("/all", require("../controllers/postParticipantsController"));

module.exports = router;
// \
