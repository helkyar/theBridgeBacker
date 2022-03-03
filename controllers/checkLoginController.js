const CourseManager = require("../managers/CourseManager");

function checkLoginController(req, res) {
  console.log(req);
  const log = req.body;
  if (log.username) {
    res.status(200).json({ ok: "go fuck yourself", jwt: "supersecreken" });
  } else {
    res.status(200).json({ ok: "go fuck yourself", jwt: 0 });
  }
}

module.exports = checkLoginController;
