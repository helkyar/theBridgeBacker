let Manager = require('./Manager');
let ModelUser = require('../models/modelUser')
const { Client } = require('pg')

class UserManager extends Manager {
    static queries = {
        getAll: 'SELECT * FROM users'
    }

    static async getAllUsers() {
        this.client.connect();
        try {
            
            
            let data = await this.client.query(this.queries.getAll)
            let tempUsers;
            data.row.map(e => {
                console.log(`Valor de row `);
                console.log(...e);
                tempUsers.push(new ModelUser(...e))
            })
            console.log('Log tempuser')
            console.log(tempUsers);
            return tempUsers;
        } catch (error) {
            console.log('Error en getAllUsers');
            console.log(error);
        }
    }
}

module.exports = UserManager;