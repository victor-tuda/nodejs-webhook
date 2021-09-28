// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");


// NETILIFY
exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const logbook = body.Logbook[body.Logbook.length - 1];

  let pool = await sql.connect(connStr);
  let result = await pool.request()
  .input('code', sql.NChar(150), body.Code, 'CODE')
  .input('title', sql.NChar(150), body.Title, 'TITLE')
  .input('value', sql.Float, body.Value, 'VALUE')
  .input('status', sql.NChar(150), body.Status, 'STATUS')
  .input('answer', sql.NChar(150), body.Answer, 'ANSWER')

  .input('logbook_code', sql.NVarChar(150), logbook.Code)
  .input('logbook_type', sql.NVarChar(150), logbook.Type)
  .input('logbook_text', sql.NVarChar(150), logbook.Text)
  .input('logbook_created_at', sql.NVarChar(150), logbook.Created_At)

  .input('contact_code', sql.NVarChar(150), body.Contact.Code)
  .input('contact_name', sql.NVarChar(150), body.Contact.Name)
  .input('contact_email', sql.NVarChar(150), body.Contact.Email)
  .input('contact_phone', sql.NVarChar(150), body.Contact.Phone)
  .input('contact_smartphone', sql.NVarChar(150), body.Contact.SmartPhone)
  .input('contact_role', sql.NVarChar(150), body.Contact.Role)
  .input('contact_document', sql.NVarChar(150), body.Contact.Document)

  .query(`INSERT INTO Webhook_FDV (CODE, TITLE, VALUE, STATUS, ANSWER,\
    LOGBOOK_CODE, LOGBOOK_TYPE, LOGBOOK_TEXT, LOGBOOK_CREATED_AT,\
    CONTACT_CODE, CONTACT_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_SMARTPHONE, CONTACT_ROLE, CONTACT_DOCUMENT)
    VALUES (@code, @title, @value, @status, @answer
      @logbook_code, @logbook_type, @logbook_text, @logbook_created_at,\
      @contact_code, @contact_name, @contact_email, @contact_phone, @contact_smartphone, @contact_role, @contact_document
      )`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};