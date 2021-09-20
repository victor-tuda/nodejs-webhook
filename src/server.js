// Criando um Debugger Morgan
const { default: knex } = require('knex');
const morgan = require('morgan');
require('tedious')

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname+'./../.env'
});

// Adicionando as comunicações com o banco de dados
var database = require("./database/index.js")

// NETILIFY
exports.handler = async (event, context) => {
    try{
        const body = JSON.parse(event.body);
        const contact =body.Contact;
        const company = body.Contact.Company;
        const logbook = body.Logbook[body.Logbook.length - 1];
        try{
            for (const[key, value] of Object.entries(contact)) {
                try{
                    const coluna = "CONTACT_" + toUpperCase(key)
                    knex('Webhook_FDV').insert({coluna: value})
                }
                catch(error){
                    console.log(`Erro ao inserir a chave ${key}\n${error}`)
                }
            }
        }
        catch{
            console.log('Rolou um erro aqui');
        }
    }
        /*
        try{
            database('Webhook_FDV').insert({CODE: body.Code});
        }
        catch{
            console.log('Erro de inserção');
        }
        */
    catch (error){
        console.log(`Erro de Conexão: ${error}`);
    };

}
