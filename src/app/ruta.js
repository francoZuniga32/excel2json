const ruta = require('express').Router();
const controlador = require('./controlador');

//ruta.get('/',)
ruta.post('/excel2json/', controlador.excel2jsonControl);
ruta.post('/json2excel', controlador.json2excelControl);
/*
ruta.post('/excel2json/config/')*/

module.exports = ruta;