let Manager = require("./Manager");
const UserCourse = require("../models/UserCourse");

class UserCourseManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM usercourses",
    getUserCourse: "SELECT * FROM usercourses WHERE id=$1",
    postUserCourse:
      "INSERT INTO usercourses (userid, courseid) VALUES ($1,$2) RETURNING *;", //Array usercourse con usercourse creado
  };

  static async getAllUserCourses() {
    return await this.queryExec(this.queries.getAll, UserCourse);
  }

  static async getUserCourse({ id }) {
    return await this.queryExec(this.queries.getUserCourse, UserCourse, [id]);
  }

  static async postUserCourses({ userid, courseid }) {
    const params = [userid, courseid];
    return await this.queryExec(
      this.queries.postUserCourse,
      UserCourse,
      params
    );
  }
}

module.exports = UserCourseManager;
