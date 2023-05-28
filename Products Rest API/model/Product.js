const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

// const Product = new mongoose.model('Product', productSchema);

// // Add DATA :-

// const addManyProduct = () => {
//   const p1 = new Product({
//     name: 'iphone13',
//     price: '73999.00',
//     quantity: '10',
//   });
//   const p2 = new Product({
//     name: 'Samsung23 Ultra',
//     price: '124999.00',
//     quantity: '05',
//   });
//   const p3 = new Product({
//     name: 'Mac Book',
//     price: '179999.00',
//     quantity: '03',
//   });
//   const p4 = new Product({
//     name: 'Galaxy Book3 Pro,',
//     price: '127999.00',
//     quantity: '01',
//   });
//   const p5 = new Product({
//     name: 'Galaxy Buds',
//     price: '13999.00',
//     quantity: '19',
//   });
//   const p6 = new Product({
//     name: 'Air Pords Pro',
//     price: '23999.00',
//     quantity: '30',
//   });
//   const p7 = new Product({
//     name: 'Sony Bravia 53" inch',
//     price: '83999.00',
//     quantity: '07',
//   });
//   const p8 = new Product({
//     name: 'Mac mini',
//     price: '63999.00',
//     quantity: '15',
//   });

//   Product.insertMany([p1, p2, p3, p4, p5, p6, p7, p8])
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// addManyProduct();

module.exports = new mongoose.model('Product', productSchema);
