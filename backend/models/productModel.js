// // const mongoose = require('mongoose');

// // const productSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   type: { type: String, required: true },
// //   price: { type: Number, required: true },
// //   description: { type: String, required: true },
// //   image: { type: String, required: true },
// //   collec: { type: String, required: true, enum: ['Foods', 'Household', 'PersonalCare', 'Lifestyle'] },
// //   createdAt: { type: Date, default: Date.now },
// // });

// // const Product = mongoose.model('Product', productSchema);

// // module.exports = Product;



// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   type: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String, required: true },
//   image: { type: String, default: null }, // Make image optional
//   collec: { 
//     type: String, 
//     required: true, 
//     enum: ['Foods', 'Household', 'PersonalCare', 'Lifestyle'] 
//   },
//   createdAt: { type: Date, default: Date.now },
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  description: String,
  collec: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;