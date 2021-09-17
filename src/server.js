const morgan = require('morgan');

var database = require("./database/index.js")

database.select('*').from('Webhook_FDV').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
