import express from "express";
import path from "path";
import { products as adminProducts } from "./admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { products: adminProducts, path: "/", pageTitle: 'Home' });
});

export default router;
