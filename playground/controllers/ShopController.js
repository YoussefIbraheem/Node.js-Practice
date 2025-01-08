import { Product } from "../models/Product.js";

export function getProducts(req, res, next) {
  Product.fetchAll( products => {
    res.render("shop", {
      prods: products,
      hasProducts: products.length > 0,
      path: "/",
      activeShop: true,
      pageTitle: "Shop",
    });
  });
}
