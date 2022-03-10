const userManager = require("../managers/UserManager");
let User = require("../models/User");

async function postUserController(req, res) {
  console.log("User controller POST");
  var dataFront = req.body;
  let user = new User(dataFront);
  const users = await userManager.postUsers(user.getObject());
  users
    ? res.status(200).json(users.map((e) => e.getObject()))
    : res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postUserController;
