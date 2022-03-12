const userManager = require("../managers/UserManager");
let User = require("../models/User");

function patchUserController(req, res) {
    console.log("User controller PATCH");
    var dataFront = req.body;
    console.log("AAAAA", dataFront);
    let user = new User(dataFront);
    console.log("BBBBB", user.getObject());
    users = userManager.patchUsers(user.getObject());
    // console.log(users);

    res.status(200).json("todoOkpatch?");
}

module.exports = patchUserController;