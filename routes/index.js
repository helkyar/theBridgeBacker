const router = require("express").Router();
require("dotenv").config();

router.use("/login", require("./login"));

/**
 * JWT MIDDLEWARE AUTH
 */
// router.use(require("../middlewares/token"));

/**
 *  PROPUESTA DE VALIDACIÓN
 */
// const { schemaRegister } = require("../middlewares/validations");

// router.post('/register', async (req, res) => {

//     const { error } = schemaRegister.validate(req.body)

//     if (error) {
//         return res.status(400).json({error: error.details[0].message})
//     }
//     ...

router.use("/course", require("./courses"));
router.use("/user", require("./users"));
router.use("/roles", require("./roles"));
router.use("/class", require("./classes"));
router.use("/assist", require("./assist"));
router.use("/participants", require("./participants"));
router.use("/usercourses", require("./usercourses"));

module.exports = router;
