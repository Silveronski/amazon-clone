require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const seedRouter = require('./routes/seedRouter');
const productRouter = require('./routes/productRouter');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());    
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/seed', seedRouter);
app.use('/api/v1/products', productRouter);
app.use((err,req,res,next) => {
    res.status(500).send({ message: err.message });
});

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();