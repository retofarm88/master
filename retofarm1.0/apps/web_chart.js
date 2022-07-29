


var con = require('./config/database.js');
	exports.chartRoute = function chartRoute(app) {

	

	app.get('/rtf_dash_env', function(req,res){ 
		var login_nm = "";
		console.log("req.session.user_nm:"+ req.session.user_nm)
		if (req.session.isLogined) {
			login_nm = req.session.user_nm;
		}
	res.render('common', {name:"/js/rtf_dash_env.js", user_nm:login_nm});
	});

	app.get('/rtf_chart_sel_loc', function(req,res){ 
		console.log("req:", req.query.grw_cd);
		grw_cd = req.query.grw_cd;

		var sql = 'SELECT MAX(rsi.svy_num) as cur_num FROM rtf_svy_info rsi,  \
		(                                                         \
		SELECT  grw_cd,\
				svy_tp,\
				max(svy_dts) AS svy_dts \
		  FROM rtf_svy_info rsi2 \
		GROUP BY rsi2.grw_cd,rsi2.svy_tp) rsi2\
	  WHERE 1 = 1\
		AND rsi.grw_cd = rsi2.grw_cd\
		AND rsi.svy_tp = rsi2.svy_tp\
		AND rsi.svy_dts = rsi2.svy_dts\
		AND rsi.svy_tp = ?\
		AND rsi.grw_cd = ?';


		sql2 = sql +" union " + sql;
		sql2 = sql2 +" union " + sql;
		sql2 = sql2 +" union " + sql;

		var tpA ="A";
		var tpB ="B";
		var tpC ="C";
		var tpD ="D";

		con.query(sql2, [tpA,grw_cd,tpB,grw_cd,tpC,grw_cd,tpD,grw_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("result=" +result)
		res.json(result);
		});
	});

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

	app.get('/rtf_chart_loc', function(req,res){ 

		var sql = "SELECT grw_cd,grw_nm,loc_cd FROM rtf_grw_mst";
		con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.json(getRetParam(result));
		});

	});



}