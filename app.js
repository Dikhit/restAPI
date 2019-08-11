const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// imports routes
const authRoute = require('./Routes/Auth');

dotenv.config();

//connect db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },()=>{
        console.log('====================================');
        console.log('connected to db');
        console.log('====================================');
    }
);

//Middleware
app.use(express.json());


// Route Midllewares
app.use('/api/user', authRoute);

app.listen(3000, ()=>{
    console.log('====================================');
    console.log('Server is running on 3000');
    console.log('====================================');
})