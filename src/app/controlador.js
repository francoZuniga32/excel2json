const controlador = {};
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const crypto = require("crypto");

const excel2json = require('convert-excel-to-json');

const store = multer.diskStorage({
    destination: path.join(__dirname, "../cache"),
    filename: (req, file, cb) => {
        var name = encriptfile(file.originalname);
        cb(null, name);
    },
});

const upload = multer({
    storage: store,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== ".xlsx") {
            return callback(new Error("Only images are allowed"));
        }
        callback(null, true);
    },
}).single("archivo");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

controlador.excel2jsonControl = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            err.message = "The file is so heavy for my service";
            return res.send(err);
        }

        try {
            var result = { sourceFile: path.join(__dirname, `../cache/${req.file.filename}`) };
            if (req.query.ignorerow) {

                result.header = { rows: req.query.ignorerow };
            }

            if (req.query.sheets) {
                result.sheets = req.query.sheets.split(',');
            }
            console.log(result);
            res.send(functionExcel2json(result));
        } catch (error) {
            console.log(error);
        }
    });
};

controlador.json2excelControl = async (req, res) => {
    let xlsx = require('json-as-xlsx');
    var data = [
        {
            sheet: 'Adults',
            columns: [
              { label: 'Name', value: 'name' },
              { label: 'Age', value: 'age' }
            ],
            content: [
              { name: 'Monserrat', age: 21, more: { phone: '11111111' } },
              { name: 'Luis', age: 22, more: { phone: '12345678' } }
            ]
          }, {
            sheet: 'Pets',
            columns: [
              { label: 'Name', value: 'name' },
              { label: 'Age', value: 'age' }
            ],
            content: [
              { name: 'Malteada', age: 4, more: { phone: '99999999' } },
              { name: 'Picadillo', age: 1, more: { phone: '87654321' } }
            ]
          }
    ];

    var seting = {
        fileName: 'MySpreadsheet', // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {}
    };
    const buffer = xlsx(data, seting);
    res.end(buffer)
}

function encriptfile(filename) {
    return (
        crypto.createHash("sha1").update(filename).digest("hex") +
        "." +
        filename.split(".")[1]
    );
}

function functionExcel2json(config) {
    try {
        return excel2json(config)
    } catch (error) {
        return error;
    }
}

module.exports = controlador;