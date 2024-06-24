const Product = require('../models/product');

const getProducts = async (req,res) => {
    const products = await Product.find({});
    res.send(products);
}

module.exports = { getProducts };