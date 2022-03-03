module.exports = class Class {
  #id;
  #absentId;
  #courseId;
  #date;
  #isPartial;
  #coments;
  constructor({ id, absentId, courseId, date, isPartial, coments }) {
    this.#id = id;
    this.#absentId = absentId;
    this.#courseId = courseId;
    this.#date = date;
    this.#isPartial = isPartial;
    this.#coments = coments;
  }
  getClasses() {
    const classes = {
      id: this.#id,
      absentId: this.#absentId,
      courseId: this.#courseId,
      date: this.#date,
      isParcial: this.#isPartial,
      coments: this.#coments,
    };
    return classes;
  }
};
