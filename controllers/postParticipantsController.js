const participantManager = require("../managers/ParticipantsManager");
let Participant = require("../models/Participants");

async function postParticipantController(req, res) {
  console.log("Participant controller POST");
  var dataFront = req.body;
  let participant = new Participant(dataFront);
  let participants = await participantManager.postParticipants(
    participant.getObject(),
  );
  console.log(participant);

  participant
    ? res.status(200).json(participants.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postParticipantController;
