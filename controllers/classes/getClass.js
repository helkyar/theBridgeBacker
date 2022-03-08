const ClassManager = require("../../managers/ClassManager");
let Class = require("../../models/Class");

async function getClassController(req, res) {
  console.log("Class controller");
  var dataFront = req.body;
  let classs = new Class(dataFront);
  const classes = await ClassManager.getClass(classs.getObject());
  classes[0] !== undefined
    ? res.status(200).json(classes[0].getObject())
    : res.status(404).json({ error: "No existe." });
}

module.exports = getClassController;
