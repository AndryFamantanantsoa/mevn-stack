const db = require("../../models");
const bcrypt = require ("bcrypt");
const User = db.user;

exports.signup = async (req, res) => {
  // Validate request
  if (!req.body.login || !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    res.status(401).json({ error: "user already existing." });
  }

  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.save()
  .then((data) => res.status(201).send(data))
  .catch(error => {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the User."
    });
  });
};

exports.signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const checkValid = await bcrypt.compare(req.body.password, user.password);
    if (checkValid) {
      res.status(200).json({ message: "Valid password" });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User not exist" });
  }
}
