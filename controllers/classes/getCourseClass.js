const ClassManager = require("../../managers/ClassManager");
let Class = require("../../models/Class");

async function getCourseClassController(req, res) {
  console.log("Class controller");
  var dataFront = req.params;
  console.log(dataFront, 'datafront');
  let classm = new Class(dataFront);
<<<<<<< HEAD

  const classes = await ClassManager.getCourseClass(classm.getObject());
  console.log("req", classes);
=======
  console.log("req", req.params);
  console.log("classm", classm);
  

  // console.log("data", dataFront);
  const classes = await ClassManager.getCourseClass(dataFront);
  
  console.log(classes, 'soy plas classes')
>>>>>>> c27a1579260b29107c961d43475417aa54ae5b1c
  classes !== undefined
    ? res.status(200).json(classes.map((item) => item.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getCourseClassController;
