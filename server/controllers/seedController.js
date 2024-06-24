const Product = require('../models/product');
const data = require('../data');
const User = require('../models/user');

const seedData = async (req,res) => {
    try {
        await Promise.all([
            Product.deleteMany({}),
            User.deleteMany({})
        ]);

        const [products, users] = await Promise.all([
            Product.insertMany(data.products),
            User.insertMany(data.users)
        ]);

        res.send({ products, users });
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = seedData;