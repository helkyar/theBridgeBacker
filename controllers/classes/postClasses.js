const ClassManager = require("../../managers/ClassManager");
const Class = require("../../models/Class");

async function postClassController(req, res) {
  console.log("Class controller");
  let dataFront = req.body;
  let classs = new Class(dataFront);
  console.log(classs.getObject());
  const classes = await ClassManager.postClasss(classs.getObject());
  classes
    ? res.status(200).json(classes.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postClassController;
