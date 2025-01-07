import { products as adminProducts } from "./AdminController.js";

export function getProducts(req, res, next) {
  res.render("shop", {
    prods: adminProducts,
    hasProducts: adminProducts.length > 0,
    path: "/",
    activeShop: true,
    pageTitle: "Shop",
  });
}
