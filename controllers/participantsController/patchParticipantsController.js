const participantManager = require("../../managers/ParticipantsManager");
const Participant = require("../../models/Participants");

function patchparticipantController(req, res) {
  const dataFront = req.body;
  const participant = new Participant(dataFront);
  participants = participantManager.patchParticipant(participant.getObject());

  res.status(200).json("todoOkpatch?");
}

module.exports = patchparticipantController;
