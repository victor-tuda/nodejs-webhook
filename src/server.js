// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// NETILIFY
exports.handler = async (event, context) => {
  let body = JSON.parse(event.body);
  let logbook = body.Logbook[body.Logbook.length - 1];

  console.log(body);

  let pool = await sql.connect(connStr)
  .catch(err => console.log("Erro de conexão com o Banco de Dados " + err));

  let result = await pool.request()
  .input('ua_num', sql.NChar(150), body.Code, 'UA_NUM')
  .input('status', sql.NChar(150), body.Status, 'STATUS')
  .input('logbook_text', sql.NVarChar(150), logbook.Text)
  .input('updated_at', sql.NChar(150), body.Updated_At, 'UPDATED_AT')
  .input('closed_at', sql.NChar(150), body.Updated_At, 'CLOSED_AT')
  
  .query(`INSERT INTO Webhook (UA_NUM, STATUS, LOGBOOK_DESC, UPDATED_AT, CREATED_AT)\
    VALUES (@ua_num, @status, @logbook_text, @updated_at, @created_at`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};