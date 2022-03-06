const participantManager = require("../../managers/ParticipantsManager");
let Participant = require("../../models/Participants");

function deleteParticipantController(req, res) {
  var dataFront = req.body;
  let participant = new Participant(dataFront);
  participantManager.deleteParticipants(participant.getObject());

  res.status(200).json("todoOkdelete?");
}

module.exports = deleteParticipantController;
