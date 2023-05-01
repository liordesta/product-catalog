const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductScheme = new Schema({
  asin: String,
  availability: Boolean,
  locale: String,
  price: Number,
  product_link: String,
  product_name: String,
  seller_name: String,
});

const ProductModel = mongoose.model('products', ProductScheme);

module.exports = ProductModel;
