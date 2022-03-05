const ParticipantsManager = require("../managers/ParticipantsManager");
const participants = async (req, res) => {
  let participants = await ParticipantsManager.getAllParticipants();
  // console.log(req.body);
  res.status(200).json(participants);
};

module.exports = participants;
// {
// createdat:'2022-08-22'
// }
// INSERT INTO participants (createdat) VALUES ('2022-07-22');
