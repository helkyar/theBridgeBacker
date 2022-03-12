const router = require("express").Router();
router.get(
  "/all",
  require("../controllers/participantsController/getParticipantsConttoller")
);
router.post(
  "/add",
  require("../controllers/participantsController/postParticipantsController")
);
router.patch(
  "/update",
  require("../controllers/participantsController/patchparticipantsController")
);
router.delete(
  "/delete",
  require("../controllers/participantsController/deleteParticipantsController")
);
router.get(
  "/count/:courseid",
  require("../controllers/participantsController/getParticipantsCount")
);
module.exports = router;
