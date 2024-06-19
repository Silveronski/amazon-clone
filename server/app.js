require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());    
app.use(express.urlencoded({ extended: true }));

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();