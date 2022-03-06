const CourseManager = require("../../managers/CourseManager");
let Course = require("../../models/Course");

async function patchCourseController(req, res) {
  console.log("Course controller");
  let dataFront = req.body;
  let course = new Course(dataFront);
  const courses = await CourseManager.patchCourses(course.getObject());
  console.log(courses);

  res.status(200).json(courses.map((e) => e.getObject()));
}
module.exports = patchCourseController;
