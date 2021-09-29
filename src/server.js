// Criando uma String de Conexão com o Banco de Dados
var connStr = `Server=${process.env.HOST},${process.env.PORT};Database= ${process.env.DATABASE};User Id= ${process.env.USER};Password=${process.env.PASSWORD};trustServerCertificate=true;`;
var sql = require("mssql");


// NETILIFY
exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const logbook = body.Logbook[body.Logbook.length - 1];

  let pool = await sql.connect(connStr)
  .catch(err => console.log("Erro de conexão com o Banco de Dados " + err));

  let result = await pool.request()
  result.input('code', sql.NChar(150), body.Code, 'CODE')
  result.input('title', sql.NChar(150), body.Title, 'TITLE')
  result.input('value', sql.Float, body.Value, 'VALUE')
  result.input('status', sql.NChar(150), body.Status, 'STATUS')
  result.input('answer', sql.NChar(150), body.Answer, 'ANSWER')

  result.input('logbook_code', sql.NVarChar(150), logbook.Code)
  result.input('logbook_type', sql.NVarChar(150), logbook.Type)
  result.input('logbook_text', sql.NVarChar(150), logbook.Text)
  result.input('logbook_created_at', sql.NVarChar(150), logbook.Created_At)

  result.input('contact_code', sql.NVarChar(150), body.Contact.Code)
  result.input('contact_name', sql.NVarChar(150), body.Contact.Name)
  result.input('contact_email', sql.NVarChar(150), body.Contact.Email)
  result.input('contact_phone', sql.NVarChar(150), body.Contact.Phone)
  result.input('contact_smartphone', sql.NVarChar(150), body.Contact.SmartPhone)
  result.input('contact_role', sql.NVarChar(150), body.Contact.Role)
  result.input('contact_document', sql.NVarChar(150), body.Contact.Document)

  result.input('company_code', sql.NVarChar(150), body.Contact.Company.Code)
  result.input('company_name', sql.NVarChar(150), body.Contact.Company.Name)
  result.input('company_segment', sql.NVarChar(150), body.Contact.Company.Segment)
  result.input('company_document', sql.NVarChar(150), body.Contact.Company.Document)
  result.input('company_state_document', sql.NVarChar(150), body.Contact.Company.State_Document)
  result.input('company_address', sql.NVarChar(150), body.Contact.Company.Address)
  result.input('company_latitude', sql.NVarChar(150), body.Contact.Company.Latitude)
  result.input('company_longitude', sql.NVarChar(150), body.Contact.Company.Longitude)

  result.input('owner_vendor_code', sql.NVarChar(150), body.Owner_Vendor.Code)
  result.input('owner_vendor_name', sql.NVarChar(150), body.Owner_Vendor.Name)
  result.input('owner_vendor_email', sql.NVarChar(150), body.Owner_Vendor.Email)
  result.input('owner_vendor_internalcode', sql.NVarChar(150), body.Owner_Vendor.InternalCode)

  result.input('pipeline_code', sql.NVarChar(150), body.Pipeline.Code)
  result.input('pipeline_name', sql.NVarChar(150), body.Pipeline.Name)

  result.input('step_code', sql.NVarChar(150), body.Step.Code)
  result.input('step_name', sql.NVarChar(150), body.Step.Name)

  result.input('sales_channel_code', sql.NVarChar(150), body.Sales_Channel.Code)
  result.input('sales_channel_name', sql.NVarChar(150), body.Sales_Channel.Name)

  result.input('created_at', sql.NVarChar(150), body.Created_At)
  result.input('updated_at', sql.NVarChar(150), body.Updated_At)
  result.input('closing_expectations', sql.NVarChar(150), body.Closing_Expectations)
  result.input('closed_at', sql.NVarChar(150), body.Closed_At)

  .query(`INSERT INTO Webhook_FDV (CODE, TITLE, VALUE, STATUS, ANSWER,\
    LOGBOOK_CODE, LOGBOOK_TYPE, LOGBOOK_TEXT, LOGBOOK_CREATED_AT,\
    CONTACT_CODE, CONTACT_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_SMARTPHONE, CONTACT_ROLE, CONTACT_DOCUMENT,\
    COMPANY_CODE, COMPANY_NAME, COMPANY_SEGMENT, COMPANY_DOCUMENT, COMPANY_STATE_DOCUMENT, COMPANY_ADDRESS, COMPANY_LATITUDE, COMPANY_LONGITUDE,\
    OWNER_VENDOR_CODE, OWNER_VENDOR_NAME, OWNER_VENDOR_EMAIL, OWNER_VENDOR_INTERNALCODE,\
    PIPELINE_CODE, PIPELINE_NAME,\
    STEP_CODE, STEP_NAME,\
    SALES_CHANNEL_CODE, SALES_CHANNEL_NAME,\
    CREATED_AT, UPDATED_AT, CLOSING_EXPECTATIONS, CLOSED_AT\
    \ )
    VALUES (@code, @title, @value, @status, @answer,\
      @logbook_code, @logbook_type, @logbook_text, @logbook_created_at,\
      @contact_code, @contact_name, @contact_email, @contact_phone, @contact_smartphone, @contact_role, @contact_document,\
      @company_code, @company_name, @company_segment, @company_document, @company_state_document, @company_address, @company_latitude, @company_longitude,\
      @owner_vendor_code, @owner_vendor_name, @owner_vendor_email, @owner_vendor_internalcode,\
      @pipeline_code, @pipeline_name,\
      @step_code, @step_name,\
      @sales_channel_code, @sales_channel_name,\
      @created_at, @updated_at, @closing_expectations, @closed_at\
      )`)

  console.dir(`Linha Inserida: ${result.rowsAffected}`) 

};