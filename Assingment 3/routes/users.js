import express from "express";
import path from "path";
import helpers from "../helpers/path.js";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(helpers.rootDir,'views','user.html'))
});


export default userRouter;