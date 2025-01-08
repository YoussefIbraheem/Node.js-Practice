import { Product } from "../models/Product.js";


export function getProducts(req, res, next) {
  const prods = Product.fetchAll();
  res.render("shop", {
    prods: prods,
    hasProducts: prods.length > 0,
    path: "/",
    activeShop: true,
    pageTitle: "Shop",
  });
}
