let Manager = require('./Manager');
const Course = require('../models/Course')
const { Client } = require('pg')


class CourseManager extends Manager {
    static queries = {
        getAll: 'SELECT * FROM courses'
    }

    static async getAllCourses() {

        try {

            this.client.connect();
            let data = await this.client.query(this.queries.getAll)
            let tempCourses = [];
            data.rows.map(e => {
                console.log(`Valor de row `);
                console.log(e);
                tempCourses.push(new Course(e.id, e.title, e.startdate, e.enddate, e.type))
            })

            console.log('Log tempuser')
            console.log(tempUsers);
            this.client.end();
            return tempCourses;
        } catch (error) {
            this.client.end();
            console.log('Error en getAllCourses');
            console.log(error);
        }

    }

}

module.exports = CourseManager;