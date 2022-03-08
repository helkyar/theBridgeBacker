let Manager = require("./Manager");
let Rol = require("../models/Rol");

class RolesManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM roles", // Array de roles

    postRol: "INSERT INTO roles (name) VALUES ($1) RETURNING *;", //Array rol
    patchRol: "UPDATE roles SET name = $1 WHERE id = $2", //Array participant con user modificado
    deleteRol: "DELETE FROM roles WHERE id=$1 RETURNING *", //Array participant con user eliminado
  };

  static async getAllRoles() {
    return await this.queryExec(this.queries.getAll, Rol);
  }

  static async postRol({ name }) {
    const params = [name];

    return await this.queryExec(this.queries.postRol, Rol, params);
  }
  static async patchRol({ id, name }) {
    const params = [name, id];
    return await this.queryExec(this.queries.patchRol, Rol, params);
  }
  static async deleteRol({ id }) {
    return await this.queryExec(this.queries.deleteRol, Rol, [id]);
  }
}

module.exports = RolesManager;
