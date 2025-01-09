import { Product } from "../models/Product.js";

export function getAddProduct(req, res, next) {
  res.render("add-product", {
    activeAddProduct: true, //for handlebars
    productCSS: true, //for handlebars
    path: "admin/add-product", //for Pug, EJS
    pageTitle: "Add Product",
  });
}

export function postAddProduct(req, res, next) {
  const data = req.body;
  let newProduct = new Product(data.title,data.price,data.sku);
  newProduct.save()
  res.redirect("/");
}

export function getCart(req,res,next){
  res.render("cart",{
     path: "admin/cart",
     prods: [],
     pageTitle: "Cart",
  })
}
