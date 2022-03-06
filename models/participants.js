module.exports = class Participant {
  #id;
  #lastname;
  #firstname;
  #courseid;
  #createdat;

  constructor({ id, lastname, firstname, courseid, createdat }) {
    this.#id = id;
    this.#lastname = lastname;
    this.#firstname = firstname;
    this.#courseid = courseid;
    this.#createdat = createdat;
  }

  getObject() {
    return {
      id: this.#id,
      lastname: this.#lastname,
      firstname: this.#firstname,
      courseid: this.#courseid,
      createdat: this.#createdat,
    };
  }
};
