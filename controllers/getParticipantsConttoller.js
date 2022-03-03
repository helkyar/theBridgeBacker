const { user } = require("pg/lib/defaults");
const ParticipantsManager = require("../managers/ParticipantsManager");

async function participantsController(req, res) {
  let participants = await ParticipantsManager.getAllParticipants("getAll");
  // console.log(participants.map((e) => e.getParticipants()));
  res.status(200).json(participants.map((e) => e.getParticipants()));
}

module.exports = participantsController;
