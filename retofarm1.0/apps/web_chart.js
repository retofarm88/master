


var con = require('./config/database.js');
	  exports.chartRoute = function chartRoute(app) {

		app.get('/rtf_dash_env', function(req,res){ 
			//var login_nm = "";
			// if (req.session.isLogined) {
			// 	login_nm = req.session.user_nm;
			// }
		res.render('common', {name:"/js/rtf_dash_env.js", user_nm:login_nm});
		});
	}