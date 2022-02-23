const userManager = require('../managers/UserManager')

function userController(req, res) {
    console.log('User controller');
    users = userManager.getAllUsers()
        // res.status(200).json(data);

}

module.exports = userController;