module.exports = class Course {
  #id;
  #title;
  #startdate;
  #enddate;
  #type;
  //Using destructuring to recieve the data.
  constructor({ id, title, startdate, enddate, type }) {
    this.#id = id;
    this.#title = title;
    this.#startdate = startdate;
    this.#enddate = enddate;
    this.#type = type;
  }
  getObject() {
    return {
      id: this.#id,
      title: this.#title,
      startdate: this.#startdate,
      enddate: this.#enddate,
      type: this.#type,
    };
  }
};
