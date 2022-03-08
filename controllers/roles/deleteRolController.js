const rolManager = require("../../managers/RolManager");
const Rol = require("../../models/Rol");

function deleteRolController(req, res) {
  const dataFront = req.body;
  const rol = new Rol(dataFront);
  rolManager.deleteRol(rol.getObject());

  res.status(200).json("todo delete?");
}

module.exports = deleteRolController;
