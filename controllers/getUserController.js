const userManager = require("../managers/UserManager");
let User = require("../models/User");

async function getUserController(req, res) {
    console.log("User controller");
    var dataFront = req.params;
    console.log("params", dataFront);
    let user = new User(dataFront);
    users = await userManager.getUser(user.getObject());
    users[0] !== undefined ?
        res.status(200).json(users[0].getObject()) :
        res.status(404).json({ error: "No existe." });
}

module.exports = getUserController;