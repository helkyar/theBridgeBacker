module.exports = class Course {
    id;
    title;
    startDate;
    endDate;
    type;
    static courseManager = require("../managers/CourseManager");

    constructor(id, title, startDate, endDate, type) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}