// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// Crindo uma função de conexão
conexao_db = sql.connect(connStr, function (err) {
  if (err){
    console.log(`Erro na conexão com o Banco de Dados: ${err}`)
  }
  const result = new sql.Request();

  return result;
  }
)


// NETILIFY
exports.handler = async function(event, context) {
  request = conexao_db();

  const body = JSON.parse(event.body); //Criando uma variável para capturar o body da requisição

  request.input('code', sql.NVarChar(150), `${body.Code}`);
  request.query(`INSERT INTO Webhook_FDV (CODE) VALUES (${body.Code})`);
  
  console.dir(`Linha Inserida: ${result.rowsAffected}`)
  

  
  };
  