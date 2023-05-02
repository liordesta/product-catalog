const ProductModel = require('../../models/products/Products');

const getProducts = async (req, res) => {
  const { page = 1, itemsPerPage = 10, q = '' } = req.query;

  try {
    const filteredProducts = q
      ? { product_name: { $regex: new RegExp(q, 'i') } }
      : {};

    const [products, totalProducts] = await Promise.all([
      ProductModel.find(filteredProducts)
        .skip((page - 1) * itemsPerPage)
        .limit(Number(itemsPerPage)),
      ProductModel.countDocuments(filteredProducts),
    ]);

    res.send({ products, totalProducts });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to fetch products' });
  }
};

module.exports = { getProducts };
