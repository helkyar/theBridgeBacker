class Participants {
  #id;
  #userid;
  #courseid;
  #createdat;
  constructor({ id, userid, courseid, createdat }) {
    this.#id = id;
    this.#userid = userid;
    this.#courseid = courseid;
    this.#createdat = createdat;
  }
  getParticipants() {
    const data = {
      id: this.#id,
      userid: this.#userid,
      courseid: this.#courseid,
      createdat: this.#createdat,
    };

    return data;
  }
}
module.exports = Participants;
