const db = require("../../models");
const Book = db.book;

exports.new = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title can not be empty!" });
    return;
  }
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    edition: req.body.title,
    description: req.body.description,
    isbn: req.body.isbn
  });

  book
    .save(book)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book."
      });
    });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    const author = req.query.author;
    const edition = req.query.edition;
    const isbn = req.query.isbn;
    let condition = {};

    if( title ) {
      condition = { title: { $regex: new RegExp(title), $options: "i" } };
    } else if ( author ){
      condition = { author: { $regex: new RegExp(author), $options: "i" } };
    } else if ( edition ){
      condition = { edition: { $regex: new RegExp(edition), $options: "i" } };
    } else if ( isbn ){
      condition = { isbn: { $regex: new RegExp(isbn), $options: "i" } };
    }

    Book.find(condition)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving books."
        });
      });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found book with id " + id });
      }
      else {
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving book with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update Book with id=${id}."
        });
      } else {
        res.status(200).send({ message: "Book was updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Book with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Book.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot delete Book with id=${id}."
        });
      } else {
        res.status(200).send({
          message: "Book was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id
      });
    });  
};