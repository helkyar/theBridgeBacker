const participantManager = require("../../managers/ParticipantsManager");

async function participantsController(req, res) {
  participants = await participantManager.getAllParticipants();

  res.status(200).json(participants.map((e) => e.getObject()));
}

module.exports = participantsController;
