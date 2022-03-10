let Manager = require("./Manager");
let User = require("../models/User");

class UserManager extends Manager {
<<<<<<< HEAD
    static queries = {
        getAll: "SELECT * FROM users", // Array de users
        getUser: "SELECT * FROM users WHERE id=$1",
        postUser: "INSERT INTO users (lastName,firstName,login,password,email) VALUES ($1,$2,$3,$4,$5) RETURNING *;", //Array user con user creado
        patchUser: "UPDATE users SET lastName = $1,firstName = $2,login = $3,password = $4,email = $5 WHERE id = $6", //Array user con user modificado
        deleteUser: "DELETE FROM users WHERE id=$1", //Array user con user eliminado
    };
=======
  static queries = {
    getAll: "SELECT * FROM users", // Array de users
    getUser: "SELECT * FROM users WHERE id=$1",
    postUser:
      "INSERT INTO users (lastname,firstname,login,password,email,rol) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;", //Array user con user creado
    patchUser:
      "UPDATE users SET lastName = $1,firstName = $2,login = $3,password = $4,email = $5 WHERE id = $6", //Array user con user modificado
    deleteUser: "DELETE FROM users WHERE id=$1", //Array user con user eliminado
  };
>>>>>>> 53a8b8e79c4d66124c04c2fbd482c69a95c95f09

    static async getAllUsers() {
        return await this.queryExec(this.queries.getAll, User);
    }

    static async getUser({ id }) {
        return await this.queryExec(this.queries.getUser, User, [id]);
    }

<<<<<<< HEAD
    static async postUsers({ lastname, firstname, login, password, email }) {
        const params = [lastname, firstname, login, password, email];
=======
  static async postUsers({ lastname, firstname, login, password, email, rol }) {
    const params = [lastname, firstname, login, password, email, rol];
>>>>>>> 53a8b8e79c4d66124c04c2fbd482c69a95c95f09

        return await this.queryExec(this.queries.postUser, User, params);
    }
    static async patchUsers({ id, lastname, firstname, login, password, email }) {
        const params = [lastname, firstname, login, password, email, id];
        return await this.queryExec(this.queries.patchUser, User, params);
    }
    static async deleteUsers({ id }) {
        return await this.queryExec(this.queries.deleteUser, User, [id]);
    }
}

module.exports = UserManager;

// INSERT INTO users (lastname,firstname,login,password,email) VALUES ('castellano','aldo','aldologin','1234',aldo@correo.com);