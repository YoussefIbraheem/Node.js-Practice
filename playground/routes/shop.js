import express from "express";
import path from "path";
import { products as adminProducts } from "./admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: adminProducts,
    hasProducts: adminProducts.length > 0,
    activeShop: true,
    pageTitle: "Shop",
  });
});

export default router;
