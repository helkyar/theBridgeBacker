const ClassManager = require("../../managers/ClassManager");
let Class = require("../../models/Class");

async function getCourseClassController(req, res) {
  console.log("Class controller");
  var dataFront = req.params;
  let classm = new Class(dataFront);
  console.log("req", req.params);

  // console.log("data", dataFront);
  const classes = await ClassManager.getCourseClass(classm.getObject());
  classes !== undefined
    ? res.status(200).json(classes.map((item) => item.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getCourseClassController;
