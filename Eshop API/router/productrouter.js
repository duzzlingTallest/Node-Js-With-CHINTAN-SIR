const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Product = require('../model/products');

router.post('/products', async (req, resp) => {
  try {
    const prod = new Product(req.body);
    const insertedprod = await prod.save();
    resp.send(insertedprod);
  } catch (error) {
    resp.send(error);
  }
});

router.get('/products', async (req, res) => {
  // ?

  try {
    const data = await Product.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'catid',
          foreignField: '_id',
          as: 'Category',
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/products/category/:cid', async (req, res) => {
  // ?

  try {

    const cid = mongoose.Types.ObjectId(req.params.cid)

    const data = await Product.aggregate([
      {
        $match: {
          'catid': req.params.cid,
        },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'catid',
          foreignField: '_id',
          as: 'Category',
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
