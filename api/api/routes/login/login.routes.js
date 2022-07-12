const logins = require("../../controllers/login/login.controller.js");
const router = require("express").Router();
// signup
router.post("/signup", logins.signup);
// signin
router.post("/", logins.signin);
router.get("/user", logins.getUser);

module.exports = router;