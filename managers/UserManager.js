let Manager = require('./Manager');
let User = require('../models/User')
const { Client } = require('pg')

class UserManager extends Manager {
    static queries = {
        getAll: 'SELECT * FROM users'
    }

    static async getAllUsers() {
        let client = new Client(this.clientParams)
        try {

            client.connect();
            let data = await client.query(this.queries.getAll)
            let tempUsers = [];
            data.row.map(e => {
                tempUsers.push(new User(e))
            })
            client.end();
            return tempUsers;
        } catch (error) {
            client.end();
            console.log('Error en getAllUsers');
            console.log(error);
        }

    }

}

module.exports = UserManager;