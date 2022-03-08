const rolManager = require("../../managers/RolManager");
const Rol = require("../../models/Rol");

function patchRolController(req, res) {
  const dataFront = req.body;
  const rol = new Rol(dataFront);
  roles = rolManager.patchRol(rol.getObject());

  res.status(200).json("todoOkpatch?");
}

module.exports = patchRolController;
