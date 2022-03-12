const participantManager = require("../../managers/ParticipantsManager");
const Participant = require("../../models/Participants");

async function getParticipantsCount(req, res) {
  const dataFront = req.params;
  const participant = new Participant(dataFront);
  const participants = await participantManager.getParticipantsCount(
    participant.getObject()
  );

  participants
    ? res.status(200).json({ count: participants.length })
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = getParticipantsCount;
