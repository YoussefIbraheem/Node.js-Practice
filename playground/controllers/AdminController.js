const products = [];

export function getAddProduct(req, res, next) {
  res.render("add-product", {
    activeAddProduct: true, //for handlebars
    productCSS: true, //for handlebars
    path: "/add-product", //for Pug, EJS
    pageTitle: "Add Product",
  });
}

export function postAddProduct
    (req, res, next)  {
        products.push({ title: req.body.title });
        res.redirect("/");
      }


export { products };