// Criando um Debugger Morgan
const morgan = require('morgan');

// Criando uma String de Conexão com o Banco de Dados
const connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
const sql = require("mssql");

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

    sql.connect(connStr)
     .then(conn => {
         console.log("Conectou");
     })
     .catch(err => {
         `ERRO DE CONEXÃO: ${err}`;
     })

  };