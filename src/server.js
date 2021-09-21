// Criando um Debugger Morgan
const morgan = require('morgan');

// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname + './../.env'
});

// Adicionando as comunicações com o banco de dados KNEXJS
// var database = require("./database/index.js");


// NETILIFY
exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const logbook = body.Logbook[body.Logbook.length - 1];

    sql.connect(connStr, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Webhook_FDV', function (err, recordset) {
            if (err) console.log(err)

            // send records as a response
           console.log(recordset);
            
        });
    });


};