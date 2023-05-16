const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
})

module.exports = mongoose.model('products', ProductsSchema);