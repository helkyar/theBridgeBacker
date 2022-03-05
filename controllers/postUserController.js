const userManager = require("../managers/UserManager");
let User = require("../models/User");

function postUserController(req, res) {
    console.log("User controller");
    var dataFront = req.body;
    let user = new User(dataFront)
    users = userManager.postUsers(user.getObject());
    console.log(users);

    res.status(200).json("todoOk?");
}

module.exports = postUserController;