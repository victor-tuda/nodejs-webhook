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

  .input('company_code', sql.NVarChar(150), body.Contact.Company.Code)
  .input('company_name', sql.NVarChar(150), body.Contact.Company.Name)
  .input('company_segment', sql.NVarChar(150), body.Contact.Company.Segment)
  .input('company_document', sql.NVarChar(150), body.Contact.Company.Document)
  .input('company_state_document', sql.NVarChar(150), body.Contact.Company.State_Document)
  .input('company_address', sql.NVarChar(150), body.Contact.Company.Address)
  .input('company_latitude', sql.NVarChar(150), body.Contact.Company.Latitude)
  .input('company_longitude', sql.NVarChar(150), body.Contact.Company.Longitude)



  .query(`INSERT INTO Webhook_FDV (CODE, TITLE, VALUE, STATUS, ANSWER,\
    LOGBOOK_CODE, LOGBOOK_TYPE, LOGBOOK_TEXT, LOGBOOK_CREATED_AT,\
    CONTACT_CODE, CONTACT_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_SMARTPHONE, CONTACT_ROLE, CONTACT_DOCUMENT,\
    COMPANY_CODE, COMPANY_NAME, COMPANY_SEGMENT, COMPANY_DOCUMENT, COMPANY_STATE_DOCUMENT, COMPANY_ADDRESS, COMPANY_LATITUDE, COMPANY_LONGITUDE\
    )
    VALUES (@code, @title, @value, @status, @answer,\
      @logbook_code, @logbook_type, @logbook_text, @logbook_created_at,\
      @contact_code, @contact_name, @contact_email, @contact_phone, @contact_smartphone, @contact_role, @contact_document,\
      @company_code, @company_name, @company_segment, @company_document, @company_state_document, @company_address, @company_latitude, @company_longitude\
      )`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};