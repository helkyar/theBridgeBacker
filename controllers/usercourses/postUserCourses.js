const UserCourseManager = require("../../managers/UserCourseManager");
const UserCourse = require("../../models/UserCourse");

async function postUserCourseController(req, res) {
  console.log("Course usercontroller");
  let dataFront = req.body;
  dataFront.rows.map(async (row) => {
    let course = new UserCourse(row);
    const courses = await UserCourseManager.postUserCourses(course.getObject());
    !courses
      ? res.status(400).json({ error: "Can you write properly nub" })
      : res.status(200).json({ msg: "users inserted successfully" });
  });
}

module.exports = postUserCourseController;
