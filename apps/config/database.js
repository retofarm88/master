var mysql = require('mysql');

var cdb_info = {
  host: "retofarm88.cafe24.com",
  user: "retofarm88",
  password: "retofarm8!",
  database: "retofarm88"
};

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}