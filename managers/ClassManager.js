let Manager = require("./Manager");
const Class = require("../models/Class");
const { Client } = require("pg");

module.exports = class ClassManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM classes",
  };

  static async getAllCourses(cueri) {
    //Necessary to create different object for each query, otherwise it gives error.
    let client = new Client(this.clientParams);
    try {
      client.connect();
      let data = await client.query(this.queries[cueri]);
      let tempClasses = [];
      data.rows.map((e) => {
        //It is not necessary to pass all the parameters separately,
        //since the model constructor does the destructuring.
        tempCourses.push(new Class(e));
      });
      client.end();
      return tempClasses;
    } catch (error) {
      client.end();
      console.log(`Error en: "${this.queries[cueri]}"`);
      console.log(error);
    }
  }
};
