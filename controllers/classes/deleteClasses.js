const ClassManager = require("../../managers/ClassManager");
let Class = require("../../models/Class");

async function deleteClassController(req, res) {
  console.log("Course controller");
  var dataFront = req.body;
  let classs = new Class(dataFront);
  const classes = ClassManager.deleteClasss(classs.getObject());
  console.log(classes);

  res.status(200).json("todoOkdelete?");
}

module.exports = deleteClassController;
