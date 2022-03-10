const CourseManager = require("../managers/CourseManager");
const jwt = require("jsonwebtoken");

function checkLoginController(req, res) {
  console.log(req);
  const log = req.body;
  if (!log.username) {
    res.status(200).json({ ok: "go fuck yourself", jwt: 0 });
  }
  // create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
}

module.exports = checkLoginController;
