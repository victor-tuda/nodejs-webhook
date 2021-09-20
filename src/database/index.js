const knexfile = require('../../knexfile');
console.log(knexfile)
const knex = require('knex')(knexfile.production);

module.exports = knex;