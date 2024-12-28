import express from "express";
import path from "path";
import helpers from "../helpers/path.js";
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(helpers.rootDir,'views','home.html'))
});

homeRouter.use((req, res, next) => {
  res.status(404).sendFile(path.join(helpers.rootDir,'views','404.html'))
});

export default homeRouter;
