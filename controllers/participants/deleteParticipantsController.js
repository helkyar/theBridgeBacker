const participantManager = require("../../managers/ParticipantsManager");
const Participant = require("../../models/Participants");

function deleteParticipantController(req, res) {
  const dataFront = req.params.participantId;
  console.log(dataFront, 'Patricia');
  // const participant = new Participant(dataFront);
  participantManager.deleteParticipants(dataFront);

  res.status(200).json("todo delete?");
}

module.exports = deleteParticipantController;
