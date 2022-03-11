module.exports = class Assist {
  #id;
  #participantid;
  #classid;
  #ispartial;
  #coments;
  #assistance;
  //Using destructuring to recieve the data.
  constructor({ id, participantid, classid, ispartial, coments, assistance }) {
    this.#id = id;
    this.#participantid = participantid;
    this.#classid = classid;
    this.#ispartial = ispartial;
    this.#coments = coments;
    this.#assistance = assistance;
  }
  getObject() {
    return {
      id: this.#id,
      participantid: this.#participantid,
      classid: this.#classid,
      ispartial: this.#ispartial,
      coments: this.#coments,
      assistance: this.#assistance,
    };
  }
};
