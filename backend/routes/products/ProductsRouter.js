const express = require('express');
const router = express.Router();
const {
  getProducts,
} = require('../../controllers/products/ProductsController');

router.get('/getProducts', getProducts);

module.exports = router;
