

import { Router } from "express";

import rootDir from "../util/path.js";

const router = Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { 
    activeAddProduct: true, //for handlebars
    productCSS: true, //for handlebars
    path: "/add-product" , //for Pug, EJS
    pageTitle:"Add Product" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default router;
const _products = products;
export { _products as products };
