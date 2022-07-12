const logins = require("../../controllers/login/login.controller.js");
const router = require("express").Router();

router.post("/signup", logins.signup);
router.post("/", logins.signin);
router.get("/user", logins.getUser);

module.exports = router;