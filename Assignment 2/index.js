const express = require("express");

const app = express();

const portNumber = 3000;

app.use((req, res, next) => {
  console.log("hello there mate!");
  next();
});

app.use((req, res, next) => {
  console.log("hi there you!");
  res.send("<h1>Welcome!</h1>");
});

app.use('/users', () => {
  console.log('users page');
  res.send('<h1>Users Page</h1>');
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express Js!</h1>");
});

app.listen(portNumber,()=>{
  console.log(`Express server running on port: http://localhost:${portNumber}`)
});