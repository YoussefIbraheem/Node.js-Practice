import express from "express";
import path from "path";
import homeRouter from "./routes/home.js";
import userRouter from "./routes/users.js";
import bodyParser from "body-parser";
import helpers from "./helpers/path.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(helpers.rootDir, "public")));

app.use("/user", userRouter);

app.use("", homeRouter);

const expressPort = 3000;
app.listen(expressPort, () => {
  console.log(`Express app running at http://localhost:${expressPort}`);
});
