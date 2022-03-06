module.exports = class Assist {
  #id;
  #participantId;
  #classId;
  #isPartial;
  #coments;
  #assistance;
  //Using destructuring to recieve the data.
  constructor({ id, participantId, classId, isPartial, coments, assistance }) {
    this.#id = id;
    this.#participantId = participantId;
    this.#classId = classId;
    this.#isPartial = isPartial;
    this.#coments = coments;
    this.#assistance = assistance;
  }
  getObject() {
    return {
      id: this.#id,
      participantId: this.#participantId,
      classId: this.#classId,
      isPartial: this.#isPartial,
      coments: this.#coments,
      assistance: this.#assistance,
    };
  }
};
