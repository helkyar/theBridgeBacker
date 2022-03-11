const CourseManager = require("../../managers/CourseManager");
const Course = require("../../models/Course");

async function postCourseController(req, res) {
    console.log("Course controller");
    let dataFront = req.body;
    console.log(dataFront);
    let course = new Course(dataFront);

    const courses = await CourseManager.postCourses(course.getObject());
    courses
        ?
        res.status(200).json(courses.map((e) => e.getObject())) :
        res.status(400).json({ error: "Can you write properly nub" });
}

module.exports = postCourseController;