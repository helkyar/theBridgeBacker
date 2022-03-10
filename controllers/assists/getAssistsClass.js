const ClassManager = require("../../managers/ClassManager");
let Assist = require("../../models/Assist");

async function getAssistClassController(req, res) {
  console.log("Class controller");
  var dataFront = req.body;
  let assist = new Assist(dataFront);

  //   console.log("classm", classm.getObject());

  const asisstance = await ClassManager.getAssistsClass(assist.getObject());
  asisstance !== undefined
    ? res.status(200).json(asisstance.map((item) => item.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getAssistClassController;
