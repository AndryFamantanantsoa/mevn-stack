const db = require("../models");
const User = db.user;

// Find a single user
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(data => {
      if (!data){
        return res.status(200).send({ message: "Not found user with id " + id, status: 404 });
      }
      else{
        res.status(200).send(data);
      } 
    })
    .catch(error => {
      return res
        .status(200)
        .send({ message: error+" | Error retrieving User with id=" + id, status: 500 });
    });
};