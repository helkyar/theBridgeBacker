const Course = require('../models/Course')
const CourseManager = require('../managers/CourseManager')

function courseController(req, res) {
    // res.status(200).json(data);
    console.log('Course controller');
    users = CourseManager.getAllCourses()

}

module.exports = courseController