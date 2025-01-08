import fs from "fs";
import path from "path";
import rootDir from "../util/path.js";
const dataPath = path.join(rootDir, "data", "products.json");
const getProductsFromFile = (callback) =>
  fs.readFile(dataPath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }
    try {
      callback(JSON.parse(fileContent));
    } catch (e) {
      callback([]);
    }
  });

class Product {
  constructor(title, price, sku) {
    this.title = title;
    this.price = price;
    this.sku = sku;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
}

export { Product };
