const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', require('./app/ruta'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listen on port ${process.env.PORT}`);
});