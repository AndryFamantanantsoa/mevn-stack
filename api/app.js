const express = require("express");
const bodyParser = require("body-parser");
const db = require("./api/models");
const loginRoute = require ("./api/routes/login/login.routes");
const booksRoute = require ("./api/routes/books/books.routes");
const usersRoute = require ("./api/routes/users/users.routes");
const app = express();

// connection to database mongoose
db.mongoose.connect ( db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Starting application api." });
});

app.use("/api/login", loginRoute);
app.use("/api/books", booksRoute);
app.use("/api/user", usersRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});