const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function getUserCourseController(req, res) {
  console.log("Course controller");
  var dataFront = req.params;
  console.log(dataFront);
  const courses = await CourseManager.getUserCourses(dataFront);
  courses[0] !== undefined
    ? res.status(200).json(courses.map((e) => e.getObject()))
    : res.status(404).json({ error: "No existe." });
}

module.exports = getUserCourseController;
