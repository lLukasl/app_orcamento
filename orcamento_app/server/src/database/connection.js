
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: '../orcamentoapp.db'
    }
});

module.exports = knex;