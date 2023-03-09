require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const indexRouter = require("./routes/indexRouter");
const usersRouter = require("./routes/usersRouter");

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/:id", (req, res) => {
  res.send(`You're looking at number ${req.params.id}!`);
});

app.listen(port, () => {
  console.log(`Pocket Coach server now working on ${port}`);
});
