const rolManager = require("../managers/UserManager");
const { Client } = require("pg");

function rolController(req, res) {
  console.log("Rol controller");
  users = rolManager.getAllRoles();
  // res.status(200).json(data);
}

module.exports = rolController;
