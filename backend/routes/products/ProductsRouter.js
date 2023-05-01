const express = require('express');
const router = express.Router();
const ProductModel = require('../../models/products/Products');

router.get('/getProducts', async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
