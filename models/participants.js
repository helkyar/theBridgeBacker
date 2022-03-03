module.exports = class participants {
  #id;
  #userId;
  #courseId;
  #date;
  constructor({ id, userId, courseId, date }) {
    this.#id = id;
    this.#userId = userId;
    this.#courseId = courseId;
    this.#date = date;
  }
  getParticipants() {
    const participants = {
      id: this.#id,
      userId: this.#userId,
      courseId: this.#courseId,
      date: this.#date,
    };
    return participants;
  }
};
