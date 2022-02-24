let Manager = require('./Manager');
const Rol = require('../models/Rol')
const { Client } = require('pg')


class RolManager extends Manager {
    static queries = {
        getAll: 'SELECT * FROM rol'
    }

    static async getAllRoles() {
        //Necessary to create different object for each query, otherwise it gives error.
        let client = new Client(this.clientParams)
        try {
            client.connect();
            let data = await client.query(this.queries.getAll)
            let tempCourses = [];
            data.rows.map(e => {
                //It is not necessary to pass all the parameters separately, 
                //since the model constructor does the destructuring.
                tempCourses.push(new Rol(e));
            })
            client.end();
            return tempCourses;
        } catch (error) {
            client.end();
            console.log('Error en getAllRoles');
            console.log(error);
        }

    }

}

module.exports = CourseManager;