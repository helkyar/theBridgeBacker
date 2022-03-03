const ParticipantsManager = require("../managers/ParticipantsManager");
const participants = async (req, res) => {
  let participants = await ParticipantsManager.getAllParticipants("post");
  // console.log(req.body);
  res.send("create");
};

module.exports = participants;
// {
// createdat:'2022-08-22'
// }
// INSERT INTO participants (createdat) VALUES ('2022-07-22');
