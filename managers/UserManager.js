let Manager = require("./Manager");
let User = require("../models/User");
const { Client } = require("pg");

class UserManager extends Manager {
    static queries = {
        getAll: "SELECT * FROM users", // Array de users
        postUser: "INSERT INTO users (lastName,firstName,login,password,email) VALUES ($1,$2,$3,$4,$5)", //Array user con user creado
        patchUser: "UPDATE users SET lastName = $1,firstName = $2,login = $3,password = $4,email = $5 WHERE id = $6", //Array user con user modificado
        deleteUser: "" //Array user con user eliminado
    };

    static async getAllUsers() {
        return await this.queryExec(this.queries.getAll, User)
    }
    static async postUsers({ lastName, firstName, login, password, email }) {
        const params = [lastName, firstName, login, password, email];
        return await this.queryExec(this.queries.postUser, User, params);
    }
    static async patchUser({ id, lastName, firstName, login, password, email }) {
        const params = [lastName, firstName, login, password, email, id];
        return await this.queryExec(this.queries.patchUser, User, params);
    }

}

module.exports = UserManager;

// INSERT INTO users (lastname,firstname,login,password,email) VALUES ('castellano','aldo','aldologin','1234',aldo@correo.com);