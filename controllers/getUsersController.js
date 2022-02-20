const userModel = require('../models/modelUser')

function userController(req, res) {
    // res.status(200).json(data);
    console.log('controller');
    users = userModel.userManager.getAllUsers()
    console.log(users);
}

module.exports = userController;