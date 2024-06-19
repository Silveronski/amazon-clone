const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.name}`);
    } 
    catch (error) {
        throw error;
    }
}

module.exports = connectDB;