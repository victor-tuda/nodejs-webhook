// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");

// NETILIFY
exports.handler = async (event, context) => {
  let body = JSON.parse(event.body);

  let pool = await sql.connect(connStr)
  .catch(err => console.log("Erro de conexão com o Banco de Dados " + err));

  let result = await pool.request()
  .input('ua_num', sql.NChar(150), body.Code, 'UA_NUM')
  .input('status', sql.NChar(150), body.Status, 'STATUS')
  .input('step_code', sql.NChar(150), body.Step.Code, 'STEP_CODE')
  .input('updated_at', sql.Date, body.Updated_At, 'UPDATED_AT')
  .input('closed_at', sql.Date, body.Updated_At, 'CLOSED_AT')
  
  .query(`INSERT INTO Webhook (UA_NUM, STATUS, STEP_CODE, UPDATED_AT, CLOSED_AT)\
    VALUES (@ua_num, @status, @step_code, @updated_at, @closed_at)`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};