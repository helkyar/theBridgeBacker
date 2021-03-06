const router = require("express").Router();
router.get(
  "/all",
  require("../controllers/participants/getParticipantsConttoller"),
);
router.get(
  "/courseid/:courseid",
  require("../controllers/participants/getParticipantsCourseController"),
);
router.post(
  "/add",
  require("../controllers/participants/postParticipantsController"),
);
router.patch(
  "/update",
  require("../controllers/participants/patchParticipantsController"),
);
router.delete(
  "/delete",
  require("../controllers/participants/deleteParticipantsController"),
);
router.get(
  "/count/:courseid",
  require("../controllers/participants/getParticipantsCount"),
);
module.exports = router;
