const ProductModel = require('../../models/products/Products');

const getProducts = async (req, res) => {
  const {
    page = 1,
    itemsPerPage = 10,
    q = '',
    sortBy = '',
    sortOrder = 'asc',
  } = req.query;
  const allowedSorting = ['locale', 'price', 'product_name'];

  try {
    const filteredProducts = q
      ? { product_name: { $regex: new RegExp(q, 'i') } }
      : {};

    const sortedProducts =
      sortBy && allowedSorting.includes(sortBy)
        ? { [sortBy]: sortOrder === 'asc' ? 1 : -1 }
        : {};

    const collation = { locale: 'en', strength: 2 };

    const [products, totalProducts] = await Promise.all([
      ProductModel.find(filteredProducts)
        .collation(collation)
        .skip((page - 1) * itemsPerPage)
        .limit(Number(itemsPerPage))
        .sort(sortedProducts),
      ProductModel.countDocuments(filteredProducts),
    ]);

    res.send({ products, totalProducts });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to fetch products' });
  }
};

module.exports = { getProducts };
