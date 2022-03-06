const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function deleteCourseController(req, res) {
  console.log("Course controller");
  var dataFront = req.body;
  let classs = new Course(dataFront);
  const classes = CourseManager.deleteClasses(classs.getObject());
  console.log(classes);

  res.status(200).json("todoOkdelete?");
}

module.exports = deleteCourseController;
