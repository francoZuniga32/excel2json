const express = require('express');
require('dotenv').config();

const app = express();

app.use('/', require('./app/ruta'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listen on port ${process.env.PORT}`);
});