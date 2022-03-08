const AssistManager = require("../../managers/AssistManager");
const Assist = require("../../models/Assist");

async function postAssistController(req, res) {
  console.log("Assist controller");
  let dataFront = req.body;
  let assist = new Assist(dataFront);
  const assists = await AssistManager.postAssists(assist.getObject());
  assists
    ? res.status(200).json(assists.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postAssistController;
