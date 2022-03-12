const participantManager = require("../../managers/ParticipantsManager");
const Participant = require("../../models/Participants");

function deleteParticipantController(req, res) {
  const dataFront = req.body;
  const participant = new Participant(dataFront);
  participantManager.deleteParticipants(participant.getObject());

  res.status(200).json("todo delete?");
}

module.exports = deleteParticipantController;
