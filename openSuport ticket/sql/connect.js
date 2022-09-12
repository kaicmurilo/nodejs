var mysql = require('mysql');

var pool = mysql.createPool({
    host: ip,
    user: user,
    password: pass,
    database: db
});

module.exports = pool;
