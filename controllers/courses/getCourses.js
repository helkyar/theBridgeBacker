const CourseManager = require("../../managers/CourseManager");

async function courseController(req, res) {
  console.log("Course controller");
  const courses = await CourseManager.getAllCourses();

  res.status(200).json(courses.map((e) => e.getObject()));
}

module.exports = courseController;
