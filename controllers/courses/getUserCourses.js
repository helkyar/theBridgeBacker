const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function getUserCourseController(req, res) {
  console.log("Course controller");
  var dataFront = req.params;
  console.log(dataFront);
  let course = new Course(dataFront);
  const courses = await CourseManager.getUserCourse(course.getObject());
  courses[0] !== undefined
    ? res.status(200).json(course.getObject())
    : res.status(404).json({ error: "No existe." });
}

module.exports = getUserCourseController;
