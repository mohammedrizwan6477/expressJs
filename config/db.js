const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/expressJs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully'.bgGreen);
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`.bgRed);
        process.exit(1);
    }
};

module.exports = connectDB;
