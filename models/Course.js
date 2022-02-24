module.exports = class Course {
    #id;
    #title;
    #startDate;
    #endDate;
    #type;

    //Using destructuring to recieve the data.
    constructor({ id, title, startDate, endDate, type }) {
        this.#id = id;
        this.#title = title;
        this.#startDate = startDate;
        this.#endDate = endDate;
        this.#type = type;
    }


}