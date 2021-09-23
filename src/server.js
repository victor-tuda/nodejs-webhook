// Criando um Debugger Morgan
// const morgan = require('morgan');

// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname + './../.env'
});


// Criando uma pool de conexão
const pool = await sql.connect(connStr);
const request = pool.request();

// Criando uma função assíncrona para conectar ao banco de dados
function messageHandler(){
    try {
        request.query('SELECT * FROM Webhook_FDV');
        console.log(result);
        return result;
    } catch (err) {
        console.error('SQL error', err);
    }
}

// Adicionando as comunicações com o banco de dados KNEXJS
// var database = require("./database/index.js");

// NETILIFY
exports.handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const logbook = body.Logbook[body.Logbook.length - 1];

    messageHandler();

    console.dir(`Linha Inserida: ${pool.rowsAffected}`) 

};