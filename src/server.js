// Criando um Debugger Morgan
//const morgan = require('morgan');

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname+'./../.env'
});

// Adicionando as comunicações com o banco de dados
var database = require("./database/index.js")

// Realizando um select no database
database.select('*').from('Webhook_FDV').then(data => {
    console.log(data);
});

// NETILIFY
exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const logbook = body.Logbook[body.Logbook.length - 1];

    database('Webhook_FDV').insert({CODE: body.Code})
     .then(console.log('Executou'))

  };