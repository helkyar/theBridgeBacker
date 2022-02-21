let Manager = require('./Manager');
let courseModel = require('../models/courseModel')
const { Client } = require('pg')

class CourseManager extends Manager {
    static queries = {
        getAll: 'SELECT * FROM courses'
    }

    static async getAllCourses() {
        this.client.connect();
        try {


            let data = await this.client.query(this.queries.getAll)
            let tempCourses;
            data.row.map(e => {
                console.log(`Valor de row `);
                console.log(...e);
                tempCourses.push(new courseModel(...e))
            })
            console.log('Log tempuser')
            console.log(tempUsers);
            return tempCourses;
        } catch (error) {
            console.log('Error en getAllCourses');
            console.log(error);
        }
        this.client.end();
    }

}

module.exports = CourseManager;