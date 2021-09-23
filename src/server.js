// Criando um Debugger Morgan
// const morgan = require('morgan');

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
// Criando uma pool de conexão
const pool = new sql.ConnectionPool(connStr);
const poolConnect = pool.connect();

    const body = JSON.parse(event.body)
    const logbook = body.Logbook[body.Logbook.length - 1];

    // Criando uma função assíncrona para conectar ao banco de dados
    async function messageHandler(){
        await poolConnect; // ensures that the pool has been created
        try {
            const request = pool.request(); // or: new sql.Request(pool1)
            const result = await request.query('SELECT * FROM Webhook_FDV')
            console.log(result)
            return result;
        } catch (err) {
            console.error('SQL error', err);
        }
    }



    console.dir(`Linha Inserida: ${pool.rowsAffected}`) 

};