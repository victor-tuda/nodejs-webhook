// Criando um Debugger Morgan
const morgan = require('morgan');
require('tedious')

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname+'./../.env'
});

// Adicionando as comunicações com o banco de dados
var database = require("./database/index")

// NETILIFY
exports.handler = async (event, context) => {
    try{
        const body = JSON.parse(event.body);
        const logbook = body.Logbook[body.Logbook.length - 1];

        /*
        var dados = {
            CODE: body.Code,
            TITLE: body.Title
        }

        database.insert(dados).into('Webhook_FDV').then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        });
        */

        database.select("*").from("Webhook_FDV").then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        })
    }
        
    catch (error){
        console.log(`Erro de Conexão: ${error}`);
    };
}
