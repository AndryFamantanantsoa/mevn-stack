const logins = require("../../controllers/login/login.controller.js");
const router = require("express").Router();
// signup
router.post("/signup", logins.signup);
// signin
router.post("/signin", logins.signin);

module.exports = router;