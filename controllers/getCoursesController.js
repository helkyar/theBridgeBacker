const CourseManager = require('../managers/CourseManager')

function courseController(req, res) {
    console.log('Course controller');
    users = CourseManager.getAllCourses();
    // res.status(200).json(data);

}

module.exports = courseController;