const dbConfig = require("../configs/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./users/users.model.js")(mongoose);
db.book = require("./books/books.model.js")(mongoose);
module.exports = db;