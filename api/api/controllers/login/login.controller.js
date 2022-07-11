const db = require("../../models");
const bcrypt = require ("bcrypt");
const User = db.user;

exports.signup = async (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    res.status(200).send({ message: "Content can not be empty!", status: 400 });
  }
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    res.status(200).json({ error: "user already existing.", status: 401 });
  }

  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.save()
  .then((data) => res.status(201).send(data))
  .catch(error => {
    return res.status(200).send({
      message:
        error.message || "Some error occurred while creating the User."
        , status: 500
    });
  });
};

exports.signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const checkValid = await bcrypt.compare(req.body.password, user.password);
    if (checkValid) {
      res.status(200).send((user));
    } else {
      res.status(200).json({ error: "Invalid Password", status: 400 });
    }
  } else {
    res.status(200).json({ error: "User not exist", status: 401 });
  }
}
