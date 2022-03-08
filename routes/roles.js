const router = require("express").Router();

router.get("/all", require("../controllers/roles/getRolesController"));
router.post("/add", require("../controllers/roles/postRolcontroller"));
router.patch("/update", require("../controllers/roles/patchRolesController"));
router.delete("/delete", require("../controllers/roles/deleteRolController"));
module.exports = router;
