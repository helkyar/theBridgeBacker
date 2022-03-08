const userManager = require("../managers/UserManager");
let User = require("../models/User");

function patchUserController(req, res) {
  console.log("User controller");
  var dataFront = req.body;
  let user = new User(dataFront);
  users = userManager.patchUsers(user.getObject());
  // console.log(users);

  res.status(200).json("todoOkpatch?");
}

module.exports = patchUserController;
