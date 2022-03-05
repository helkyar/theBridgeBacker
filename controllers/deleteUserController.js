const userManager = require("../managers/UserManager");
let User = require("../models/User");

function deleteUserController(req, res) {
    console.log("User controller");
    var dataFront = req.body;
    let user = new User(dataFront)
    users = userManager.deleteUsers(user.getObject());
    console.log(users);

    res.status(200).json("todoOkdelete?");
}

module.exports = deleteUserController;