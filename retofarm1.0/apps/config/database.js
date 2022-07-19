var mysql = require('mysql');

var con = mysql.createConnection({
	host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	user: "retofarm88",
	password: "retofarm8!",
	database: "retofarm"
});
con.connect();
module.exports = con;
