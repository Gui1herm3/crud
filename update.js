var mysql = require('mysql2');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});


con.connect(function(err) {
if (err) throw err;

var sql = "UPDATE customers SET address = 'Highway 37' WHERE address = 'Canyon 123'";
con.query(sql, function (err, result) {
if (err) throw err;
console.log(result. affectedRows + " record(s) updated");
});
});
