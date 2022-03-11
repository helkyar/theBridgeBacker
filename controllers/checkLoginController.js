const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserManager = require("../managers/UserManager");
let User = require("../models/User");

async function checkLoginController(req, res) {
  const dataFront = req.body;
  if (!dataFront.login) {
    res.status(200).json({ error: "nice try" });
  }

  let log = new User(dataFront);
  const user = await UserManager.userExists(log.getObject());
  if (!user[0]) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  const { rol, login, id, password } = user[0].getObject();
  const validPassword = await bcrypt.compare(req.body.password, password);
  if (!validPassword) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }
  // create token________________________________________________
  const token = jwt.sign(
    {
      login,
      id,
    },
    process.env.TOKEN_SECRET
  );

  res.status(200).json({ token, rol, login, id });
}

module.exports = checkLoginController;
