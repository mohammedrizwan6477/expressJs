const mongoose = require('mongoose');
const colors = require('colors');

//function connect mongodb data base

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/expressJs')
        console.log(`server connected with mongodb`.bgGreen)
    }catch(err){
        console.log(`Mongodb Error ${err.message}`.bgRed);
        process.exit(1);
    }
}
module.exports = connectDB