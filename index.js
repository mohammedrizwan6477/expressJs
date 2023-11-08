//imports 
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

//mongodb function call
connectDB()

//res obj
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes)

//port Number
const PORT = 5000

//server running
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
