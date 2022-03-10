let Manager = require("./Manager");
const Course = require("../models/Course");

class CourseManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM courses",
    getCourse: "SELECT * FROM courses WHERE id=$1",
    postCourse:
      "INSERT INTO courses (title,startdate,enddate,type) VALUES ($1,$2,$3,$4) RETURNING *;", //Array course con course creado
    patchCourse:
      "UPDATE courses SET title = $1,startDate = $2,endDate = $3,type = $4 WHERE id = $5 RETURNING *", //Array course con course modificado
    deleteCourse: "DELETE FROM courses WHERE id=$1", //Array course con course eliminado
  };

  static async getAllCourses() {
    return await this.queryExec(this.queries.getAll, Course);
  }

  static async getCourse({ id }) {
    return await this.queryExec(this.queries.getCourse, Course, [id]);
  }

  static async postCourses({ title, startdate, enddate, type }) {
    const params = [title, startdate, enddate, type];
    return await this.queryExec(this.queries.postCourse, Course, params);
  }
  static async patchCourses({ id, title, startDate, endDate, type }) {
    const params = [title, startDate, endDate, type, id];
    return await this.queryExec(this.queries.patchCourse, Course, params);
  }
  static async deleteCourses({ id }) {
    return await this.queryExec(this.queries.deleteCourse, Course, [id]);
  }
}

module.exports = CourseManager;
