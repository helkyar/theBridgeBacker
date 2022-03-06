const AssistManager = require("../../managers/AssistManager");
let Assist = require("../../models/Assist");

async function deleteAssistController(req, res) {
  console.log("Assist controller");
  var dataFront = req.body;
  let assist = new Assist(dataFront);
  const assists = AssistManager.deleteAssists(assist.getObject());
  console.log(assists);

  res.status(200).json("todoOkdelete?");
}

module.exports = deleteAssistController;
