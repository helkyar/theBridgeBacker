module.exports = class Participant {
  #id;
  #lastname;
  #firstname;
  #courseid;
  #createdate;

  constructor({ id, lastname, firstname, courseid, createdate }) {
    this.#id = id;
    this.#lastname = lastname;
    this.#firstname = firstname;
    this.#courseid = courseid;
    this.#createdate = createdate;
  }

  getObject() {
    return {
      id: this.#id,
      lastname: this.#lastname,
      firstname: this.#firstname,
      courseid: this.#courseid,
      createdate: this.#createdate,
    };
  }
};
