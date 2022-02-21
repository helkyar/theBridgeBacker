const courseModel = require('../models/modelCourse')

function courseController(req, res) {
    // res.status(200).json(data);
    console.log('Course controller');
    users = courseModel.courseManager.getAllCourses()

}

module.exports = courseController;