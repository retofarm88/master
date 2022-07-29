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

console.log("dir=  " +__dirname);

//jsj

//app.use(express.static(path.join(__dirname, 'web_2.js')));
//app.use("/",rouweb2);

// 세션 (begin)
var session = require('express-session');                      
var MySQLStore = require('express-mysql-session')(session); 
var options = {
	host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
	user: "retofarm88",
	password: "retofarm8!",
	database: "retofarm"
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret:"asdfasffdas",
  resave:false,
  saveUninitialized:true,
  store: sessionStore
}))
// 세션 (end)



app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use('/web_2', web_2);

var con = require('./config/database.js');
const web2 = require("./web_2");
const web_chart = require("./web_chart");



// app.get('/rtf_dash_env', function(req,res){ // 2
// 	var login_nm = "";
// 	// if (req.session.isLogined) {
// 	// 	login_nm = req.session.user_nm;
// 	// }
//   res.render('common', {name:"/js/rtf_dash_env.js", user_nm:login_nm});
// });


// views/common.js 가 html template 이다
app.get('/location', function(req,res){ // 2
	var login_nm = "";
	if (req.session.isLogined) {
		login_nm = req.session.user_nm;
	}
  res.render('common', {name:"/js/RTF_LOC_MST.js", user_nm:login_nm});
});


// views/common.js 가 html template 이다
app.get('/equipment', function(req,res){ // 2
	var login_nm = "";
	if (req.session.isLogined) {
		login_nm = req.session.user_nm;
	}
  res.render('common', {name:"/js/rtf_eqp_mst.js", user_nm:login_nm});
});

// views/common.js 가 html template 이다
app.get('/sensor', function(req,res){ // 2
	var login_nm = "";
	if (req.session.isLogined) {
		login_nm = req.session.user_nm;
	}
  res.render('common', {name:"/js/rtf_ssr_mst.js", user_nm:login_nm});
});


app.get('/ctrlsch', function(req,res){ // 2

	console.log("good!1111");
		var login_nm = "";
	if (req.session.isLogined) {
		login_nm = req.session.user_nm;
	}
	res.render('common', {name:"/js/rtf_ctrl_sch.js", user_nm:login_nm});
});


app.get('/RTF_LOC_MST', function(req,res) {
    
	var data = req.query.param;
	var loc_nm = req.query.loc_nm;
	console.log("req.query : " + JSON.stringify(req.query) )
	console.log("req.query.param : " + req.query.param )
	console.log("req.query.param1 : " + req.query.param1 )
	console.log("loc_nm : " + loc_nm )

	  var sql = "SELECT * FROM rtf_loc_mst";

	  if(loc_nm != null && loc_nm != undefined && loc_nm != ''){
		loc_nm ='%' + loc_nm +'%'
		sql += ' WHERE loc_nm like  ?' 
	  }
	  
	  sloc='[loc_nm]';

	  console.log("select qry: " + sql);
	  con.query(sql, sloc , function (err, result, fields) {
		if (err) throw err;
		res.json(getRetParam(result));
	  });
})


app.put('/SAVE_RTF_LOC_MST/', function(req,res) {
    
	var modrow= "";
	modrow = req.body["updatedRows"];

	console.log('save updatedRows = ' + JSON.stringify(modrow));

	if(modrow != ""){
		web2.MOD_RTF_LOC_MST(req,res, modrow,"UPDATE")
	}

	modrow = req.body["createdRows"];

	console.log('save createdRows = ' + JSON.stringify(modrow));

	if(modrow != ""){
		web2.MOD_RTF_LOC_MST(req,res, modrow,"CREATE")
	}

	modrow = req.body["deletedRows"];

	console.log('save deletedRows = ' + JSON.stringify(modrow));

	if(modrow != ""){
		web2.MOD_RTF_LOC_MST(req,res, modrow,"DELETE")
	}
});



///////////////////////////////// 장비 (begin)
app.put('/SAVE_RTF_EQP_MST/', function(req,res) {
    
	var modrow= "";
	modrow = req.body["updatedRows"];

	if(modrow != ""){
		web2.MOD_RTF_EQP_MST(req,res, modrow,"UPDATE")
	}

	modrow = req.body["createdRows"];

	if(modrow != ""){
		web2.MOD_RTF_EQP_MST(req,res, modrow,"CREATE")
	}

	modrow = req.body["deletedRows"];

	if(modrow != ""){
		web2.MOD_RTF_EQP_MST(req,res, modrow,"DELETE")
	}
});


app.get('/RTF_EQP_MST', function(req,res) {
    
	var data = req.query.param;
	var eqp_nm = req.query.eqp_nm;
	console.log("req.query : " + JSON.stringify(req.query) )
	console.log("data : " + data )
	console.log("eqp_nm : " + eqp_nm )

	  var sql = "SELECT * FROM rtf_eqp_mst";

	  if(eqp_nm != null && eqp_nm != undefined && eqp_nm != ''){
		eqp_nm ='%' + eqp_nm +'%'
		sql += ' WHERE eqp_nm like  ?' 
	  }

	  console.log("select qry: " + sql);
	  con.query(sql, [eqp_nm] , function (err, result, fields) {
		if (err) throw err;
		res.json(getRetParam(result));
	  });
})




function  getRetParam(result){
	return {
		"result": true,
		"data": {
			"contents":result,
			"pagination": {
				"page": 1,
				"totalCount": 10
			}
		}
	};
}



// 센서 (begin)
app.get('/RTF_SSR_MST', function(req,res) {
    
	//console.log("req:", req);
	var ssr_nm = req.query.ssr_nm;

	var data = req.query.data;
	console.log('GET Parameter = ' + data);


	var sql = "SELECT * FROM rtf_ssr_mst";

	if(ssr_nm != null && ssr_nm != undefined && ssr_nm != ''){
		ssr_nm ='%' + ssr_nm +'%'
		sql += ' WHERE ssr_nm like  ?' 
	  }

	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.json(getRetParam(result));
	});

})


app.put('/SAVE_RTF_SSR_MST/', function(req,res) {
    
	var modrow= "";
	modrow = req.body["updatedRows"];

	if(modrow != ""){
		MOD_RTF_SSR_MST(req,res, modrow,"UPDATE")
	}

	modrow = req.body["createdRows"];

	if(modrow != ""){
		MOD_RTF_SSR_MST(req,res, modrow,"CREATE")
	}

	modrow = req.body["deletedRows"];

	if(modrow != ""){
		MOD_RTF_SSR_MST(req,res, modrow,"DELETE")
	}
	
});


/////////////////////////ctrlsch

app.get('/RTF_CTRL_SCH', function(req,res) {
    
	//console.log("req:", req);
	var grw_cd = req.query.grw_cd;

	var data = req.query.data;
	console.log('GET Parameter = ' + data);


	var sql = "SELECT * FROM rtf_msch_info";
	console.log(sql);

	if(grw_cd != null && grw_cd != undefined && grw_cd != ''){
		grw_cd ='%' + grw_cd +'%'
		sql += ' WHERE ssr_nm like  ?' 
	  }

	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		//console.log("Result: " + result.map(v => Object.assign({}, v)));
		//console.log(fields);
		console.log(sql);
		res.json(getRetParam(result));
	});

})

app.put('/SAVE_RTF_CTRL_SCH', function(req,res) {
    
	var modrow= "";
	modrow = req.body["updatedRows"];

	if(modrow != ""){
		web2.MOD_RTF_CTRL_SCH(req,res, modrow,"UPDATE")
	}

	modrow = req.body["createdRows"];

	if(modrow != ""){
		web2.MOD_RTF_CTRL_SCH(req,res, modrow,"CREATE")
	}

	modrow = req.body["deletedRows"];

	if(modrow != ""){
		web2.MOD_RTF_CTRL_SCH(req,res, modrow,"DELETE")
	}
	
});

// 로그인
app.get('/login', function(req,rsp){    
    
	var post = req.query;

	//console.log('000 id: ' + req.query.id);
        
	con.query('select user_id as id, user_nm as user_nm from rtf_user_mst where user_id=? and pwd_no=?',
    [post.id,post.password], function(err,result){
    	console.log("session post.id:" + post.id);
		console.log("session post.password:" + post.password);
        if(err) throw err;
        if(result[0]!==undefined){
			console.log("login success");
            req.session.uid = result[0].id; 
            req.session.user_nm = result[0].user_nm;
            req.session.isLogined = true;
            //세션 스토어가 이루어진 후 redirect를 해야함.
            req.session.save(function(){ 
		rsp.redirect('/location'); // 로그인 후 이동 화면
            });
        }
		// else {
			// throw "login fail!";
		// }
    });
})


web_chart.chartRoute(app);


// 80 포트로 서버 오픈
app.listen(port, function() {
    console.log("start! express server on port " )
})

//module.exports = app;


