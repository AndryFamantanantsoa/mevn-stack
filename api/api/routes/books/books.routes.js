const books = require("../../controllers/books/books.controller.js");
const router = require("express").Router();

router.post("/new", books.new);
router.get("/", books.findAll);
router.get("/:id", books.findOne);
router.put("/:id", books.update);
router.delete("/:id", books.delete);

module.exports = router;