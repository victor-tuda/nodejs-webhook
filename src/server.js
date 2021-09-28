// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");


// NETILIFY
exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const logbook = body.Logbook[body.Logbook.length - 1];

  console.log(body);

  let pool = await sql.connect(connStr);
  let result = await pool.request()
  .input('code', sql.NChar(150), body.Code, 'CODE')
  .input('title', sql.NChar(150), body.Title, 'TITLE')
  .input('value', sql.Float, body.Value, 'VALUE')
  .query(`INSERT INTO Webhook_FDV (CODE, TITLE, VALUE) VALUES (@code, @title, @value)`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};