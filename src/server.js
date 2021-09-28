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
  .input('status', sql.NChar(150), body.Status, 'STATUS')
  .input('answer', sql.NChar(150), body.Answer, 'ANSWER')

  .input('logbook_code', sql.NVarChar(150), logbook.Code)
  .input('logbook_type', sql.NVarChar(150), logbook.Type)

  .query(`INSERT INTO Webhook_FDV (CODE, TITLE, VALUE, STATUS, ANSWER\
    LOGBOOK_CODE, LOGBOOK_TYPE)
    VALUES (@code, @title, @value, @status, @answer\
      @logbook_code, @logbook_type)`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};