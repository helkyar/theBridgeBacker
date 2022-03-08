const AssistManager = require("../../managers/AssistManager");
let Assist = require("../../models/Assist");

async function getAssistController(req, res) {
  console.log("Assist controller");
  var dataFront = req.body;
  let assist = new Assist(dataFront);
  const assists = await AssistManager.getAssist(assist.getObject());
  assists[0] !== undefined
    ? res.status(200).json(assists[0].getObject())
    : res.status(404).json({ error: "No existe." });
}

module.exports = getAssistController;
