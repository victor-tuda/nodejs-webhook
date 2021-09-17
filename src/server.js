// Criando um Debugger Morgan
const morgan = require('morgan');
require('tedious')

// Adicionando as variáveis de ambiente para desenvolvimento local
require('dotenv').config({
    path: __dirname+'./../.env'
});

// Adicionando as comunicações com o banco de dados
var database = require("./database/index.js")

// Realizando um select no database
database.select('*').from('Webhook_FDV').then(data => {
    console.log(data);
});

// NETILIFY
exports.handler = async (event, context) => {
    try{
        const body = JSON.stringify(event.body);
        const logbook = body.Logbook[body.Logbook.length - 1];

        console.log(`Code: ${body.Code}`)
        for (var attributename in body){
            console.log(attributename+": "+body[attributename]);
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
    }
    catch (error){
        console.log(`Erro de Conexão: ${error}`)
    };

}
