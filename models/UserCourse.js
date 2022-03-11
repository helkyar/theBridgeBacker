module.exports = class Course {
  #id;
  #userid;
  #courseid;
  //Using destructuring to recieve the data.
  constructor({ id, userid, courseid }) {
    this.#id = id;
    this.#userid = userid;
    this.#courseid = courseid;
  }
  getObject() {
    return {
      id: this.#id,
      userid: this.#userid,
      courseid: this.#courseid,
    };
  }
};
