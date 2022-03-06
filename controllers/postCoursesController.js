const CourseManager = require("../managers/CourseManager");

function courseController(req, res) {
  console.log("Course controller");
  res.status(200).json({ action: "insert" });
}

module.exports = courseController;
