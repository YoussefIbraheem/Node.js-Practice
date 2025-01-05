import express from "express";
import rootDir from "./utils/path.js";
import path from "path";
import bodyParser from "body-parser";

const app = express();

const users = [];

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  console.log(users);
  return res.render("home", {
    pageTitle: "home",
    users: users,
    hasUsers: users.length != 0
  });
});

app.post("/add-user", (req, res, next) => {
  users.push(req.body.username);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening to port http://localhost:${port}`);
});
