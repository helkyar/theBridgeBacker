const Course = require('../models/Course')

function courseController(req, res) {
    // res.status(200).json(data);
    console.log('Course controller');
    users = Course.courseManager.getAllCourses()

}

module.exports = courseController;