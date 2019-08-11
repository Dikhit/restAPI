const express = require('express');
const app = express();

// imports routes
const AuthRoute = require('./Routes/Auth');
// Route Midllewares
app.use('/api/user', AuthRoute);

app.listen(3000, ()=>{
    console.log('====================================');
    console.log('Server is running on 3000');
    console.log('====================================');
})