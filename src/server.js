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
    try {
      const body = JSON.parse(event.body); //Criando uma variável para capturar o body da requisição
  
      let pool = await sql.connect(connStr);
      let result = await pool.request();

      result.input(code, NVarChar(4000), `${body.Code}`)
      result.query(`INSERT INTO Webhook_FDV (CODE) VALUES (@code)`)
  
      console.dir(`Linha Inserida: ${result.rowsAffected}`)
    }
  
    catch(err) {
      console.log(`Code: ${body.Code}\nErro na Response: ${err}`)
      return { statusCode: 500, body: err.toString() }
    }
  
  };
  