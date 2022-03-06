module.exports = class Class {
  #id;
  #courseId;
  #userId;
  #createdAt;
  constructor({ id, courseId, userId, createdAt }) {
    this.#id = id;
    this.#courseId = courseId;
    this.#userId = userId;
    this.#createdAt = createdAt;
  }
  getClasses() {
    return {
      id: this.#id,
      courseId: this.#courseId,
      userId: this.#userId,
      createdAt: this.#createdAt,
    };
  }
};
