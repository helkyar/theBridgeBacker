const { user } = require("pg/lib/defaults");
const ParticipantsManager = require("../managers/ParticipantsManager");

async function participantsController(req, res) {
  let participants = await ParticipantsManager.getAllParticipants(
    ParticipantsManager.queries.getAll,
  );
  // console.log(participants.map((e) => e.getParticipants()));
  // console.log(participants[0].id);
  res.status(200).json(participants);
}

module.exports = participantsController;
