const ClassManager = require("../../managers/ClassManager");

async function classsController(req, res) {
  console.log("Class controller");
  const classes = await ClassManager.getAllClasses();

  res.status(200).json(classes.map((e) => e.getObject()));
}

module.exports = classsController;
