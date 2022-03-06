const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function getCourseController(req, res) {
  console.log("Course controller");
  var dataFront = req.body;
  let course = new Course(dataFront);
  const courses = await CourseManager.getCourse(course.getObject());
  courses[0] !== undefined
    ? res.status(200).json(courses[0].getObject())
    : res.status(404).json({ error: "No existe." });
}

module.exports = getCourseController;
