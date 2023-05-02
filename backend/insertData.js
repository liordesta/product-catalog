const mongoose = require('mongoose');
const ProductModel = require('./models/products/Products');
const data = require('./dbData.json');

require('dotenv').config();
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database.');

    ProductModel.countDocuments()
      .then((count) => {
        if (count === 0) {
          ProductModel.create(data)
            .then((result) => {
              console.log(`${result} document inserted into collection.`);
              mongoose.disconnect();
            })
            .catch((err) => {
              console.error(err);
              mongoose.disconnect();
            });
        } else {
          console.log('Collection is not empty. Data not inserted.');
          mongoose.disconnect();
        }
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error(err);
  });
