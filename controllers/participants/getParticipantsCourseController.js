const ParticipantManager = require("../../managers/ParticipantsManager");
let Participant = require("../../models/Participants");

async function getParticipantCourseController(req, res) {
  //   console.log("Class controller");
  var dataFront = req.params;
  let participant = new Participant(dataFront);
  console.log("reqdddddddddddddddddddddd");

  const participants = await ParticipantManager.getParticipantCourse(
    participant.getObject(),
  );
  participants !== undefined
    ? res.status(200).json(participants.map((item) => item.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getParticipantCourseController;
