const userManager = require("../managers/UserManager");

async function userController(req, res) {
    console.log("User controller");
    users = await userManager.getAllUsers();
    console.log("result getAll");
    console.log(users);
    res.status(200).json(users.map(e => e.getObject()));
}

module.exports = userController;