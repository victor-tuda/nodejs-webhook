// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// Crindo uma função de conexão
const conexao_db = async function() {
  const pool = await sql.connect(connStr);
  const result = pool.request();

  return result
}

// NETILIFY
exports.handler = async function(event, context) {
  request = conexao_db();
  console.log(`REQUEST: ${request}`);
  console.log(`CONTEXT: ${context}`);

  const body = JSON.parse(event.body); //Criando uma variável para capturar o body da requisição

  request.input(code, NVarChar(4000), `${body.Code}`);
  request.query(`INSERT INTO Webhook_FDV (CODE) VALUES (${body.Code})`);
  
  console.dir(`Linha Inserida: ${result.rowsAffected}`)
  

  
  };
  