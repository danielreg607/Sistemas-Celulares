const mysql2 = require('mysql2');

const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Regino_11',
    database: 'abonados',
})

module.exports = database;