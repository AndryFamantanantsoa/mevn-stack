const user = require("../../controllers/user.controller.js");
const router = require("express").Router();

router.get("/:id", user.findOne);

module.exports = router;