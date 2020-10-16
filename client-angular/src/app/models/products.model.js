module.exports = class Products {

  constructor(id, product_name, supplier, quantity, unit_cost) {
    this.id = id;
    this.product_name = product_name;
    this.supplier = supplier;
    this.quantity = quantity;
    this.unit_cost = unit_cost;
  }
}
