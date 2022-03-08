module.exports = class Roles {
  #id;
  #name;

  //Using destructuring to recieve the data.
  constructor({ id, name }) {
    this.#id = id;
    this.#name = name;
  }
  getObject() {
    return {
      id: this.#id,
      name: this.#name,
    };
  }
};
