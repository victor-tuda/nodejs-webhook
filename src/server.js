// Criando um Debugger Morgan
const morgan = require('morgan');
require('tedious')
require('mssql')

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname + './../.env'
});



// NETILIFY
exports.handler = async (event, context) => {
    // Adicionando as comunicações com o banco de dados
    var database = require("./database/index.js");
    const body = JSON.parse(event.body);
    const logbook = body.Logbook[body.Logbook.length - 1];

    database.select('*').from('Webhook_FDV').then(data => {
        console.log(data);
    });

  };