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


function insert (chave, tipo, valor, sql_column){
    try{
        result.input(`${chave}`, `${tipo}`, `${valor}`);
        result.query(`INSERT INTO Webhook_FDV (${sql_column}) VALUES (@${chave})`)
    }
    catch {
        console.log('Erro ao inserir body.Code');
        console.log(`CODE: ${body.Code}`)
    }
}


// NETILIFY
exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const logbook = body.Logbook[body.Logbook.length - 1];

    let pool = await sql.connect(connStr)

    let result = await pool.request()

    insert('code', 'sql.NChar(150)', body.Code, 'CODE');
    insert('title', 'sql.NChar(150)', body.Title, 'TITLE');
    insert('value', 'sql.Float', body.Value, 'VALUE');



    console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};