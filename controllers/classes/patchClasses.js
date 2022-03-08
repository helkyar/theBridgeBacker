const ClassManager = require("../../managers/ClassManager");
let Class = require("../../models/Class");

async function patchClassController(req, res) {
  console.log("Class controller");
  let dataFront = req.body;
  let classs = new Class(dataFront);
  const classes = await ClassManager.patchClasses(classs.getObject());
  console.log(classes);

  res.status(200).json(classes.map((e) => e.getObject()));
}
module.exports = patchClassController;
