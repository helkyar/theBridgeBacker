const CourseManager = require("../../managers/CourseManager");

async function classsController(req, res) {
  console.log("Course controller");
  const classes = await CourseManager.getAllClasses();

  res.status(200).json(classes.map((e) => e.getObject()));
}

module.exports = classsController;
