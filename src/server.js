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
        const logbook = body.Logbook[body.Logbook.length - 1];
        // LOOP QUE EU PRECISO CONSERTAR
        try{
            database('Webhook_FDV').insert({CODE: body.Code});
        }
        catch{
            console.log('Erro em body.Code');
        }
        try{
            database('Webhook_FDV').insert({TITLE: body.Title});
            console.log("Inseriu")
        }
        catch{
            console.log('Erro em body.Title');
        }
        try{
            database('Webhook_FDV').insert({VALUE: body.Value});
        }
        catch{
            console.log('Erro em body.Value');
        }
        try{
            database('Webhook_FDV').insert({STATUS: body.Status});
        }
        catch{
            console.log('Erro em body.Status');
        }
        try{
            database('Webhook_FDV').insert({ANSWER: body.Answer});
        }
        catch{
            console.log('Erro em body.Answer');
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
