let Manager = require("./Manager");
let User = require("../models/User");
const { Client } = require("pg");

class UserManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM users",
  };

  static async getAllUsers(cueri) {
    let client = new Client(this.clientParams);
    try {
      client.connect();
      let data = await client.query(this.queries[cueri]);
      let tempUsers = [];
      data.rows.map((e) => {
        tempUsers.push(new User(e));
      });
      client.end();
      return tempUsers;
    } catch (error) {
      client.end();
      console.log("Error en getAllUsers");
      console.log(error);
    } finally {
    }
  }
}

module.exports = UserManager;

// INSERT INTO users (lastname,firstname,login,password,email) VALUES ('castellano','aldo','aldologin','1234',aldo@correo.com);
