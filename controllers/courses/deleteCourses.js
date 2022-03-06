const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function deleteCourseController(req, res) {
  console.log("Course controller");
  var dataFront = req.body;
  let course = new Course(dataFront);
  const courses = CourseManager.deleteCourses(course.getObject());
  console.log(courses);

  res.status(200).json("todoOkdelete?");
}

module.exports = deleteCourseController;
