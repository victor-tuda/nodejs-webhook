// Criando um Debugger Morgan
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
        try{
            database.select('*').from('Webhook_FDV');
            console.log("Cheguei até aqui")
        }
        catch{
            console.log('Erro de inserção');
        }
    }
        
    catch (error){
        console.log(`Erro de Conexão: ${error}`);
    };

}
