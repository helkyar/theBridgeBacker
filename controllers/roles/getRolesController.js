const rolesManager = require("../../managers/RolManager");

async function rolesController(req, res) {
  roles = await rolesManager.getAllRoles();

  res.status(200).json(roles.map((e) => e.getObject()));
}

module.exports = rolesController;
