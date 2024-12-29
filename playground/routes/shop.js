const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { products: adminData.products , path: '/' , pageTitle: 'Home'});
});

module.exports = router;
