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


function insert (chave, tipo, valor, sql_column){
    try{
        result.input(`${chave}`, `${tipo}`, `${valor}`);
        result.query(`INSERT INTO Webhook_FDV (${sql_column}) VALUES (@${chave})`)
    }
    catch {
        console.log(`Erro ao inserir body.${chave}`);
        console.log(`CODE: ${body.Code}`)
    }
}

let pool = await sql.connect(connStr)
let result =  pool.request()


// NETILIFY
exports.handler = async (event, context) => {

    try{
        const body = JSON.parse(event.body)
        .then(
            insert('code', 'sql.NChar(150)', body.Code, 'CODE')
        ).then(
            insert('title', 'sql.NChar(150)', body.Title, 'TITLE')
        ).then(
            insert('value', 'sql.Float', body.Value, 'VALUE')
        );
        const logbook = body.Logbook[body.Logbook.length - 1];
    }
    catch{
        console.log('Não foi possível capturar o body da requisição')
    }



    console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};