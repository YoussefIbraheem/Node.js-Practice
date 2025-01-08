const products = [];

class Product {
  constructor(title, price, sku) {
    this.title = title;
    this.price = price;
    this.sku = sku;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}

export { Product };
