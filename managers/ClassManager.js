let Manager = require("./Manager");
const Class = require("../models/Class");

class ClassManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM classes",
    getClass: "SELECT * FROM classes WHERE id=$1",
    postClass:
      "INSERT INTO classes (userId, courseId, createdAt) VALUES ($1,$2,$3) RETURNING *;", //Array class con class creado
    patchClass:
      "UPDATE classes SET userId=$1, courseId=$2, createdAt=$3 WHERE id = $4 RETURNING *", //Array class con class modificado
    deleteClass: "DELETE FROM classes WHERE id=$1", //Array class con class eliminado
  };

  static async getAllClasss() {
    return await this.queryExec(this.queries.getAll, Class);
  }

  static async getClass({ id }) {
    return await this.queryExec(this.queries.getClass, Class, [id]);
  }

  static async postClasss({ userId, courseId, createdAt }) {
    const params = [userId, courseId, createdAt];
    return await this.queryExec(this.queries.postClass, Class, params);
  }
  static async patchClasss({ id, userId, courseId, createdAt }) {
    const params = [userId, courseId, createdAt, id];
    return await this.queryExec(this.queries.patchClass, Class, params);
  }
  static async deleteClasss({ id }) {
    return await this.queryExec(this.queries.deleteClass, Class, [id]);
  }
}

module.exports = ClassManager;
