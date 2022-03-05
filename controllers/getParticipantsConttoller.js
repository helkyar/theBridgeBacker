const participantManager = require("../managers/ParticipantsManager");

async function participantsController(req, res) {
  console.log("User controller");
  participants = await participantManager.getAllParticipants();
  console.log("result getAll");
  console.log(participants);
  res.status(200).json(participants.map((e) => e.getObject()));
}

module.exports = participantsController;
