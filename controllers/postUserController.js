const bcrypt = require("bcrypt");
const userManager = require("../managers/UserManager");
let User = require("../models/User");

async function postUserController(req, res) {
  console.log("User controller POST");
  var dataFront = req.body;

  const salt = await bcrypt.genSalt(10);
  dataFront.password = await bcrypt.hash(req.body.password, salt);

  let user = new User(dataFront);
  const users = await userManager.postUsers(user.getObject());
  users
    ? res.status(200).json(users.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postUserController;
