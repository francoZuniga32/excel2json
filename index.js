const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const path = require('path');

console.log(__dirname);
const result = excelToJson({
    source: fs.readFileSync(__dirname+'/exel.xltx') // fs.readFileSync return a Buffer
});

console.log(result);