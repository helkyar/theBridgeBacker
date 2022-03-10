module.exports = class Class {
  #id;
  #courseid;
  #userid;
  #createdat;
  constructor({ id, courseid, userid, createdat }) {
    this.#id = id;
    this.#courseid = courseid;
    this.#userid = userid;
    this.#createdat = createdat;
  }
  getObject() {
    return {
      id: this.#id,
      courseid: this.#courseid,
      userid: this.#userid,
      createdat: this.#createdat,
    };
  }
};
