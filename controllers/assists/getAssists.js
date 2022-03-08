const AssistManager = require("../../managers/AssistManager");

async function assistController(req, res) {
  console.log("Assist controller");
  const assists = await AssistManager.getAllAssists();

  res.status(200).json(assists.map((e) => e.getObject()));
}

module.exports = assistController;
