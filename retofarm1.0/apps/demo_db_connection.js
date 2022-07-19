var mysql = require('mysql');

var con = mysql.createConnection({
  host: "retofarm88.cafe24.com",
  user: "retofarm88",
  password: "retofarm8!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM retofarm88.rtf_code_dtl";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    //console.log("Result: " + result);
	console.log(fields);
  });
});