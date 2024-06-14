const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cashflow_system'
});

module.exports=db;