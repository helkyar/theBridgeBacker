const participantManager = require("../../managers/ParticipantsManager");
const Participant = require("../../models/Participants");

async function postParticipantController(req, res) {
  const dataFront = req.body;
  const participant = new Participant(dataFront);
  const participants = await participantManager.postParticipants(
    participant.getObject()
  );

  participants
    ? res.status(200).json(participants.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postParticipantController;
