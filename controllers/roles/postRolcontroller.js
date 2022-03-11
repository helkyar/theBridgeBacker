const rolesManager = require("../../managers/RolManager");
const Rol = require("../../models/Rol");

async function postRolController(req, res) {
    const dataFront = req.body;
    const rol = new Rol(dataFront);
    const roles = await rolesManager.postRol(rol.getObject());

    roles
        ?
        res.status(200).json(roles.map ? ((e) => e.getObject()) : roles) :
        res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postRolController;