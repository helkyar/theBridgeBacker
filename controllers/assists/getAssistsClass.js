const AssistManager = require("../../managers/AssistManager");
let Assist = require("../../models/Assist");

async function getAssistClassController(req, res) {
  console.log("assist controller");
  var dataFront = req.params;
  let assist = new Assist(dataFront);

  console.log("assit", assist.getObject());

  const asisstance = await AssistManager.getAssistClass(assist.getObject());
  asisstance !== undefined
    ? res.status(200).json(asisstance.map((item) => item.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getAssistClassController;
