const db = require("../models");
const User = db.user;

// Find a single user
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(data => {
      if (!data){
        res.status(404).send({ message: "Not found user with id " + id });
      }
      else{
        res.status(200).send(data);
      } 
    })
    .catch(error => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};