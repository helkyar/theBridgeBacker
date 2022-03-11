const UserCourseManager = require("../../managers/UserCourseManager");

async function courseController(req, res) {
  console.log("Course controller");
  const courses = await UserCourseManager.getAllUserCourses();

  res.status(200).json(courses.map((e) => e.getObject()));
}

module.exports = courseController;
