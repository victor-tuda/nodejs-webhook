// Criando um Debugger Morgan
// const morgan = require('morgan');

// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname + './../.env'
});

// Crindo uma função de conexão
const conexao_db = function() {
  const pool = await sql.connect(connStr);
  const result = pool.request();

  return result
}


// Adicionando as comunicações com o banco de dados KNEXJS
// var database = require("./database/index.js");

// NETILIFY
exports.handler = async function(event, context) {
  request = conexao_db();
  console.log(request);

  const body = JSON.parse(event.body); //Criando uma variável para capturar o body da requisição
  console.log(body);
  console.log(body.Code);

  request.input(code, NVarChar(4000), `${body.Code}`);
  request.query(`INSERT INTO Webhook_FDV (CODE) VALUES (@code)`);


  
      console.dir(`Linha Inserida: ${result.rowsAffected}`)
  

  
  };
  