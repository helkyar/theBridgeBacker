const AssistManager = require("../../managers/AssistManager");
let Assist = require("../../models/Assist");

async function patchAssistController(req, res) {
  console.log("Assist controller");
  let dataFront = req.body;
  let assist = new Assist(dataFront);
  const assists = await AssistManager.patchAssists(assist.getObject());
  console.log(assists);

  res.status(200).json(assists.map((e) => e.getObject()));
}
module.exports = patchAssistController;
