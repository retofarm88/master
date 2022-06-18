// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
var port = 3000;
console.log("port:" + port);
//var bodyParser = require('body-parser')


// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

app.set('view engine','ejs'); // views/*.ejs 파일을 template 으로 사용한다

var static = require('serve-static');
var path = require('path');

app.use(static(path.join(__dirname, 'public'))); // /public/index.html 를 첫 페이지로 한다

// Set 'views' directory for any views
// being rendered res.render()

// error fix :Failed to lookup view  in views directory "/views"
// cafe24 장비에서만 난 에러
// local 에서는 안 났다
app.set('views', path.join(__dirname, 'views'));

//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/', function(req,res) {
    // //res.sendFile(__dirname + "/public/index.html")
	// console.log("aaaaaaaaaaaa");
    // res.sendFile(__dirname + "/public/location.html")
// })

// views/common.js 가 html template 이다
app.get('/location', function(req,res){ // 2
  res.render('common', {name:"/js/RTF_LOC_MST.js"});
});

app.get('/equipment', function(req,res){ // 2
  res.render('common', {name:"/js/rtf_eqp_mst.js"});
});

app.get('/RTF_LOC_MST', function(req,res) {
    
	//console.log("req:", req);
	var data = req.query.data;
	console.log('GET Parameter = ' + data);

	//res.json([{ loc_cd: 'Flavio' }])
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "SELECT * FROM retofarm.rtf_loc_mst";
	  con.query(sql, function (err, result, fields) {
		if (err) throw err;
		//console.log("Result: " + result.map(v => Object.assign({}, v)));
		//console.log(fields);
	res.json(result);
	  });
	});
})

app.post('/RTF_LOC_MST/', function(req,res) {
    
	console.log("POST");
	var loc_cd = req.body["loc_cd"];
	var loc_nm = req.body["loc_nm"];
	var up_loc = req.body["up_loc"];
	var seq_no = req.body["seq_no"];
	var start_dt = req.body["start_dt"];
	var end_dt = req.body["end_dt"];
	var use_yn = req.body["use_yn"];
	var rmk_dc = req.body["rmk_dc"];
	console.log('Put loc_cd = ' + loc_cd);
	console.log('Put rmk_dc = ' + rmk_dc);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "insert into retofarm88.rtf_loc_mst (loc_cd, loc_nm, up_loc, seq_no , start_dt, end_dt, use_yn, rmk_dc) values (?,?,?,?,?,?,?,?)";
	  con.query(qry, [loc_cd, loc_nm, up_loc, seq_no, start_dt, end_dt, use_yn, rmk_dc, loc_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("insert Result: " + result);
		console.log("insert qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})

app.put('/RTF_LOC_MST/:loc_cd', function(req,res) {
    
	console.log("PUT");
	var loc_cd = req.params.loc_cd;
	console.log('Put Parameter = ' + loc_cd);
	console.log('req.body = ' + req.body);
	//var loc_nm = req.body.loc_nm;
	var loc_nm = req.body["loc_nm"];
	var up_loc = req.body["up_loc"];
	var seq_no = req.body["seq_no"];
	var start_dt = req.body["start_dt"];
	var end_dt = req.body["end_dt"];
	var rmk_dc = req.body["rmk_dc"];
	console.log('Put loc_nm = ' + loc_nm);
	console.log('Put rmk_dc = ' + rmk_dc);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "update retofarm88.rtf_loc_mst set loc_nm = ?, up_loc =?, seq_no =?, start_dt = ?, end_dt = ?, rmk_dc = ? where loc_cd = ?";
	  con.query(qry, [loc_nm, up_loc, seq_no, start_dt, end_dt, rmk_dc, loc_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("update Result: " + result);
		console.log("update qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})

app.delete('/RTF_LOC_MST/:loc_cd', function(req,res) {
    
	console.log("DELETE");
	var loc_cd = req.params.loc_cd;
	console.log('DELETE Parameter = ' + loc_cd);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "delete from retofarm88.rtf_loc_mst where loc_cd = ?";
	  con.query(qry, [loc_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("delete Result: " + result);
		console.log("delete qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})
/// 장비 (begin)
app.get('/rtf_eqp_mst', function(req,res) {
    
	//console.log("req:", req);
	var data = req.query.data;
	console.log('GET Parameter = ' + data);

	//res.json([{ eqp_cd: 'Flavio' }])
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "SELECT * FROM retofarm.rtf_eqp_mst";
	  con.query(sql, function (err, result, fields) {
		if (err) throw err;
		//console.log("Result: " + result.map(v => Object.assign({}, v)));
		//console.log(fields);
	res.json(result);
	  });
	});
})

app.post('/rtf_eqp_mst/', function(req,res) {
    
	console.log("POST");
	var eqp_cd = req.body["eqp_cd"];
	var eqp_nm = req.body["eqp_nm"];
	var offset = req.body["offset"];
	var mdl_nm = req.body["mdl_nm"];
	var srl_num = req.body["srl_num"];
	var loc_cd = req.body["loc_cd"];
	var use_yn = req.body["use_yn"];
	var rmk_dc = req.body["rmk_dc"];
	console.log('Put eqp_cd = ' + eqp_cd);
	console.log('Put rmk_dc = ' + rmk_dc);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "insert into retofarm88.rtf_eqp_mst (eqp_cd, eqp_nm, offset, mdl_nm , srl_num, loc_cd, use_yn, rmk_dc) values (?,?,?,?,?,?,?,?)";
	  con.query(qry, [eqp_cd, eqp_nm, offset, mdl_nm, srl_num, loc_cd, use_yn, rmk_dc, eqp_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("insert Result: " + result);
		console.log("insert qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})

app.put('/rtf_eqp_mst/:eqp_cd', function(req,res) {
    
	console.log("PUT");
	var eqp_cd = req.params.eqp_cd;
	console.log('Put Parameter = ' + eqp_cd);
	console.log('req.body = ' + req.body);
	//var eqp_nm = req.body.eqp_nm;
	var eqp_nm = req.body["eqp_nm"];
	var offset = req.body["offset"];
	var mdl_nm = req.body["mdl_nm"];
	var srl_num = req.body["srl_num"];
	var loc_cd = req.body["loc_cd"];
	var rmk_dc = req.body["rmk_dc"];
	console.log('Put eqp_nm = ' + eqp_nm);
	console.log('Put rmk_dc = ' + rmk_dc);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "update retofarm88.rtf_eqp_mst set eqp_nm = ?, offset =?, mdl_nm =?, srl_num = ?, loc_cd = ?, rmk_dc = ? where eqp_cd = ?";
	  con.query(qry, [eqp_nm, offset, mdl_nm, srl_num, loc_cd, rmk_dc, eqp_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("update Result: " + result);
		console.log("update qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})

app.delete('/rtf_eqp_mst/:eqp_cd', function(req,res) {
    
	console.log("DELETE");
	var eqp_cd = req.params.eqp_cd;
	console.log('DELETE Parameter = ' + eqp_cd);
	
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  
	  var qry = "delete from retofarm88.rtf_eqp_mst where eqp_cd = ?";
	  con.query(qry, [eqp_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("delete Result: " + result);
		console.log("delete qry: " + qry);
	  });
	  

	  
	});
	
	res.json(null);

})

/// 장비  (end)


// 80 포트로 서버 오픈
app.listen(4000, function() {
    console.log("start! express server on port " )
})

