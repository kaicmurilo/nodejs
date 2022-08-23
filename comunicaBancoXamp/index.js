var mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.1.16",
    port: "3306",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});