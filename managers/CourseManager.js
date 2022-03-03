let Manager = require("./Manager");
const Course = require("../models/Course");
const { Client } = require("pg");

class CourseManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM courses",
  };

  static async getAllCourses() {
    //Necessary to create different object for each query, otherwise it gives error.
    let client = new Client(this.clientParams);
    try {
      client.connect();
      let data = await client.query(this.queries.getAll);
      let tempCourses = [];
      data.rows.map((e) => {
        //It is not necessary to pass all the parameters separately,
        //since the model constructor does the destructuring.
        tempCourses.push(new Course(e));
      });
      client.end();

      return tempCourses;
    } catch (error) {
      client.end();
      console.log("Error en getAllCourses");
      console.log(error);
    }
  }
}

module.exports = CourseManager;
