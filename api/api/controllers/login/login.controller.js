const db = require("../../models");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.user;

exports.signup = async (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    return res.status(200).send({ message: "Content can not be empty!", status: 400 });
  }
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    return res.status(200).json({ message: "user already existing.", status: 401 });
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

let loadedUser;
exports.signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const checkValid = await bcrypt.compare(req.body.password, user.password);
    if (checkValid) {
      const token = jwt.sign({ email: user.email }, "expressnuxtsecret", {
        expiresIn: "20m",
      });
      loadedUser = user;
      res.status(200).json({token});
    } else {
      return res.status(200).json({ message: "Invalid Password", status: 400 });
    }
  } else {
    return res.status(200).json({ message: "User not exist", status: 401 });
  }
}

exports.getUser = (req, res) => { 
  res.status(200).json({
    user: {
      id: loadedUser._id,
      name: loadedUser.name,
      email: loadedUser.email,
    },
  });
};
