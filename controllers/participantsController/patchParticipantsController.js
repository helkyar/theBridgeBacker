const participantManager = require("../../managers/ParticipantsManager");
let Participant = require("../../models/Participants");

function patchparticipantController(req, res) {
  var dataFront = req.body;
  let participant = new Participant(dataFront);
  participants = participantManager.patchParticipant(participant.getObject());

  res.status(200).json("todoOkpatch?");
}

module.exports = patchparticipantController;
