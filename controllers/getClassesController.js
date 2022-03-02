const ClassManager = require("../managers/ClassManager");

function courseController(req, res) {
  console.log("Class controller");
  users = ClassManager.getAllCourses("getAll");
  res.status(200).json(users);
}

module.exports = courseController;
