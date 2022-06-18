

	var con = require('./config/database.js');
	  exports.MOD_RTF_LOC_MST = function MOD_RTF_LOC_MST(req,res, modrow,mod) {
	
		if(modrow != ""){
			console.log("11");
	
			for (var index in modrow) {
				console.log('modrow[item] = ' + modrow[index]);
				if(mod =="UPDATE"){
					UPD_RTF_LOC_MST(req,res,modrow[index]);
				}else if(mod =="CREATE"){
					CREATE_RTF_LOC_MST(req,res,modrow[index]);
				}else if(mod =="DELETE"){
					DELETE_RTF_LOC_MST(req,res,modrow[index]);
				}
			  }
		}else{
			res.json(null);
	
		}
	}
	
	function DELETE_RTF_LOC_MST(req,res, updrow) {
		
		var rows = updrow;
		var loc_cd = rows["loc_cd"];
	
		console.log('Put loc_cd = ' + loc_cd);
		
		var mysql = require('mysql');
		var con = mysql.createConnection({
		  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
		  user: "retofarm88",
		  password: "retofarm8!"
		});
	
		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  
		  var qry = "delete from retofarm.rtf_loc_mst  where  loc_cd =? ";
		  
		  con.query(qry, [loc_cd], function (err, result, fields) {
			if (err) throw err;
			console.log("delte Result: " + result);
			console.log("update qry: " + qry);
		  });
		  
		  var param1= {"result": true,"data": {"result":":sucess"}}
		  res.json(param1);
		  
		});
	  }
	
	
	function CREATE_RTF_LOC_MST(req,res, updrow) {
		
		var rows = updrow;
	
		var loc_cd = rows["loc_cd"];
		var loc_nm = rows["loc_nm"];
		var up_loc = rows["up_loc"];
		var seq_no = rows["seq_no"];
		var start_dt = rows["start_dt"];
		var end_dt = rows["end_dt"];
		var use_yn = rows["use_yn"];
		var rmk_dc = rows["rmk_dc"];
	
		//console.log('Put name = ' + loc_cd);
		console.log('Put loc_nm = ' + loc_nm);
		
		var mysql = require('mysql');
		var con = mysql.createConnection({
		  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
		  user: "retofarm88",
		  password: "retofarm8!"
		});
	
		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  
		  var qry = "insert into retofarm.rtf_loc_mst (loc_cd,loc_nm, up_loc, seq_no, start_dt, end_dt, use_yn, rmk_dc) values (?,?,?,?,?,?,?,?)";
		  
		  con.query(qry, [loc_cd,loc_nm, up_loc, seq_no, start_dt, end_dt, use_yn, rmk_dc], function (err, result, fields) {
			if (err) throw err;
			console.log("insert Result: " + result);
			console.log("insert qry: " + qry);
		  });
		  
		  var param1= {"result": true,"data": {"result":":sucess"}
		};
	
		res.json(param1);
		  
		});
	  }
	
	function UPD_RTF_LOC_MST(req,res, updrow) {
		var rows = updrow;
	
		var loc_cd = rows["loc_cd"];
		var loc_nm = rows["loc_nm"];
		var up_loc = rows["up_loc"];
		var seq_no = rows["seq_no"];
		var start_dt = rows["start_dt"];
		var end_dt = rows["end_dt"];
		var use_yn = rows["use_yn"];
		var rmk_dc = rows["rmk_dc"];
	
		console.log('Put loc_nm = ' + loc_nm);
		
		var mysql = require('mysql');
		var con = mysql.createConnection({
		  host: "retofarmdb.cvbtmcuybt5k.ap-northeast-2.rds.amazonaws.com",
		  user: "retofarm88",
		  password: "retofarm8!"
		});
	
		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  
		  var qry = "update retofarm.rtf_loc_mst set loc_nm=?, up_loc=?, seq_no=?, start_dt=?, end_dt=?, use_yn=?, rmk_dc=? where  loc_cd =? ";
		  
		  con.query(qry, [ loc_nm, up_loc, seq_no, start_dt, end_dt, use_yn, rmk_dc,loc_cd], function (err, result, fields) {
			if (err) throw err;
			console.log("update Result: " + result);
			console.log("update qry: " + qry);
		  });
		  var param1= {"result": true,"data": {"result":":sucess"}};
		  res.json(param1);
		});
	  }

	  ////////////////eqp
	
	  exports.MOD_RTF_EQP_MST= function MOD_RTF_EQP_MST(req,res, modrow,mod) {

	if(modrow != ""){
		console.log("11");

		for (var index in modrow) {
			console.log('modrow[item] = ' + modrow[index]);
			if(mod =="UPDATE"){
				UPD_RTF_EQP_MST(req,res,modrow[index]);
			}else if(mod =="CREATE"){
				CREATE_RTF_EQP_MST(req,res,modrow[index]);
			}else if(mod =="DELETE"){
				DELETE_RTF_EQP_MST(req,res,modrow[index]);
			}
		  }
	}else{
		res.json(null);

	}
}


function CREATE_RTF_EQP_MST( req,res,updrow) {
	
	var rows = updrow;

	console.log("POST");
	var eqp_cd = rows["eqp_cd"];
	var eqp_nm = rows["eqp_nm"];
	var offset_cd = rows["offset_cd"];
	var mdl_nm = rows["mdl_nm"];
	var srl_num = rows["srl_num"];
	var loc_cd = rows["loc_cd"];
	var use_yn = rows["use_yn"];
	var rmk_dc = rows["rmk_dc"];
	console.log('Put eqp_cd = ' + eqp_cd);
	console.log('Put rmk_dc = ' + rmk_dc);

	console.log('Put eqp_cd = ' + eqp_cd);
	
	var mysql = require('mysql');


	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		
		var qry = "insert into retofarm.rtf_eqp_mst (eqp_cd, eqp_nm, offset_cd, mdl_nm , srl_num, loc_cd, use_yn, rmk_dc) values (?,?,?,?,?,?,?,?)";
		con.query(qry, [eqp_cd, eqp_nm, offset_cd, mdl_nm, srl_num, loc_cd, use_yn, rmk_dc, eqp_cd], function (err, result, fields) {
			if (err) throw err;
			
			console.log("insert Result: " + result);
			console.log("insert qry: " + qry);
		});
	  
	  	var param1= {"result": true,"data": {"result":":sucess"}};

		res.json(param1);
	  
	});
  }


function UPD_RTF_EQP_MST(req,res,updrow) {
    var rows = updrow;
	console.log("PUT");
	var eqp_cd = rows["eqp_cd"];
	console.log('Put Parameter = ' + eqp_cd);
	var eqp_nm = rows["eqp_nm"];
	var offset_cd = rows["offset_cd"];
	var mdl_nm = rows["mdl_nm"];
	var srl_num = rows["srl_num"];
	var loc_cd = rows["loc_cd"];
	var rmk_dc = rows["rmk_dc"];
	console.log('Put eqp_nm = ' + eqp_nm);
	console.log('Put rmk_dc = ' + rmk_dc);
	

	var qry = "update rtf_eqp_mst set eqp_nm = ?, offset_cd =?, mdl_nm =?, srl_num = ?, loc_cd = ?, rmk_dc = ? where eqp_cd = ?";
	con.query(qry, [eqp_nm, offset_cd, mdl_nm, srl_num, loc_cd, rmk_dc, eqp_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("update Result: " + result);
		console.log("update qry: " + qry);
	});
	var param1= {"result": true,"data": {"result":":sucess"}};
	res.json(param1);

}

function DELETE_RTF_EQP_MST(req,res,updrow) {
    var rows = updrow;
	console.log("DELETE");
	var eqp_cd = rows["eqp_cd"];
	console.log('DELETE Parameter = ' + eqp_cd);
		
	var qry = "delete from rtf_eqp_mst where eqp_cd = ?";
	con.query(qry, [eqp_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("delete Result: " + result);
		console.log("delete qry: " + qry);
	});
	  
	res.json(null);

}

///////////////////////////////////////////sensor

exports.MOD_RTF_SSR_MST =   function MOD_RTF_SSR_MST(req,res, modrow,mod) {

	if(modrow != ""){
		console.log("11");

		for (var index in modrow) {
			console.log('modrow[item] = ' + modrow[index]);
			if(mod =="UPDATE"){
				UPD_RTF_SSR_MST(req,res,modrow[index]);
			}else if(mod =="CREATE"){
				CREATE_RTF_SSR_MST(req,res,modrow[index]);
			}else if(mod =="DELETE"){
				DELETE_RTF_SSR_MST(req,res,modrow[index]);
			}
		  }
	}else{
		res.json(null);

	}
}

function CREATE_RTF_SSR_MST(req,res, updrow) {
    var rows = updrow;
	console.log("POST");
	var ssr_id = rows["ssr_id"];
	var ssr_nm = rows["ssr_nm"];
	var ssr_use =rows["ssr_use"];
	var addr =   rows["addr"];
	var loc_cd = rows["loc_cd"];
	var eqp_cd = rows["eqp_cd"];
	var useall_yn =   rows["useall_yn"];
	var max_lmt_num = rows["max_lmt_num"];
	var max_num = rows["max_num"];
	var std_num = rows["std_num"];
	var min_num = rows["min_num"];
	var min_lmt_num = rows["min_lmt_num"];
	var use_yn = rows["use_yn"];
	var rmk_dc = rows["rmk_dc"];
	console.log('Put ssr_id = ' + ssr_id);
	console.log('Put max_lmt_num = ' + max_lmt_num);
	
	var qry = "insert into rtf_ssr_mst (ssr_id, ssr_nm, ssr_use, addr , eqp_cd, loc_cd, useall_yn, max_lmt_num, max_num, std_num, min_num, min_lmt_num, use_yn, rmk_dc) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	con.query(qry, [ssr_id, ssr_nm, ssr_use, addr, eqp_cd, loc_cd, useall_yn, max_lmt_num, max_num, std_num, min_num, min_lmt_num, use_yn, rmk_dc], function (err, result, fields) {
		if (err) throw err;
		console.log("insert Result: " + result);
		console.log("insert qry: " + qry);
	});
	
	var param1= {"result": true,"data": {"result":":sucess"}};
	res.json(param1);

}

function UPD_RTF_SSR_MST(req,res, updrow)  {
    var rows = updrow;
	console.log("PUT");
	var ssr_id = rows["ssr_id"];
	console.log('Put Parameter = ' + ssr_id);
	console.log('req.body = ' + rows);
	var ssr_nm = rows["ssr_nm"];
	var ssr_use = rows["ssr_use"];
	var addr = rows["addr"];
	var eqp_cd = rows["eqp_cd"];
	var loc_cd = rows["loc_cd"];
	var max_lmt_num = rows["max_lmt_num"];
	var max_num = rows["max_num"];
	var std_num = rows["std_num"];
	var min_num = rows["min_num"];
	var min_lmt_num = rows["min_lmt_num"];
	var use_yn = rows["use_yn"];
	var rmk_dc = rows["rmk_dc"];
	
	console.log('Put ssr_id = ' + ssr_id);
	console.log('Put max_lmt_num = ' + max_lmt_num);
	

	var qry = "update rtf_ssr_mst set ssr_nm = ?, ssr_use =?, addr =?, eqp_cd = ?, loc_cd = ?, max_lmt_num = ? , max_num= ? , std_num= ? , min_num= ? , min_lmt_num= ? , use_yn= ? , rmk_dc = ? where ssr_id = ?";
	con.query(qry,                   [ssr_nm, ssr_use, addr, eqp_cd              , loc_cd, max_lmt_num, max_num              , std_num, min_num, min_lmt_num           , use_yn, rmk_dc             , ssr_id], function (err, result, fields) {
		if (err) throw err;
		console.log("update Result: " + result);
		console.log("update qry: " + qry);
	});
	
	var param1= {"result": true,"data": {"result":":sucess"}};
	  res.json(param1);

}

function DELETE_RTF_SSR_MST(req,res, updrow) {
    var rows = updrow;
	console.log("DELETE");
	var ssr_id = rows["ssr_id"];
	console.log('DELETE Parameter = ' + ssr_id);
		
	var qry = "delete from rtf_ssr_mst where ssr_id = ?";
	con.query(qry, [ssr_id], function (err, result, fields) {
		if (err) throw err;
		console.log("delete Result: " + result);
		console.log("delete qry: " + qry);
	});
	  
	var param1= {"result": true,"data": {"result":":sucess"}}
	  res.json(param1);

}

////////////////////////////ctrlsch
	

exports.MOD_RTF_CTRL_SCH =   function MOD_RTF_CTRL_SCH(req,res, modrow,mod) {

	if(modrow != ""){
		console.log("11");

		for (var index in modrow) {
			console.log('modrow[item] = ' + modrow[index]);
			if(mod =="UPDATE"){
				UPD_RTF_CTRL_SCH(req,res,modrow[index]);
			}else if(mod =="CREATE"){
				CREATE_RTF_CTRL_SCH(req,res,modrow[index]);
			}else if(mod =="DELETE"){
				DELETE_RTF_CTRL_SCH(req,res,modrow[index]);
			}
		  }
	}else{
		res.json(null);

	}
}

function CREATE_RTF_CTRL_SCH (req,res, updrow) {
    var rows = updrow;
	var grw_cd = 		rows["grw_cd"];
	var svy_tp = 		rows["svy_tp"];
	var ssr_id =		rows["ssr_id"];
	var start_dt =  	rows["start_dt"];
	var start_tm = 		rows["start_tm"];
	var end_dt = 		rows["end_dt"];
	var end_tm =   		rows["end_tm"];
	var eqp_cd = 		rows["eqp_cd"];
	var max_lmt_num = 	rows["max_lmt_num"];
	var max_num = 		rows["max_num"];
	var std_num = 		rows["std_num"];
	var min_num = 		rows["min_num"];
	var min_lmt_num = 	rows["min_lmt_num"];
	
	var qry = "insert into rtf_msch_info (grw_cd, svy_tp, ssr_id, start_dt, start_tm, end_dt, end_tm, eqp_cd, max_lmt_num, max_num, std_num, min_num, min_lmt_num)"
	         + " values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
	con.query(qry, [grw_cd, svy_tp, ssr_id, start_dt, start_tm, end_dt, end_tm, eqp_cd, max_lmt_num, max_num, std_num, min_num, min_lmt_num], function (err, result, fields) {
		if (err) throw err;
		console.log("insert Result: " + result);
		console.log("insert qry: " + qry);
	});
	
	var param1= {"result": true,"data": {"result":":sucess"}};
	res.json(param1);

}


function UPD_RTF_CTRL_SCH(req,res, updrow)  {
    var rows = updrow;
	var grw_cd = 		rows["grw_cd"];
	var svy_tp = 		rows["svy_tp"];
	var ssr_id =		rows["ssr_id"];
	var start_dt =  	rows["start_dt"];
	var start_tm = 		rows["start_tm"];
	var end_dt = 		rows["end_dt"];
	var end_tm =   		rows["end_tm"];
	var eqp_cd = 		rows["eqp_cd"];
	var max_lmt_num = 	rows["max_lmt_num"];
	var max_num = 		rows["max_num"];
	var std_num = 		rows["std_num"];
	var min_num = 		rows["min_num"];
	var min_lmt_num = 	rows["min_lmt_num"];

	var qry = "update rtf_msch_info set  svy_tp=?, ssr_id=?, start_dt=?, start_tm=?, end_dt=?, end_tm=?, eqp_cd=?, max_lmt_num=?, max_num=?, std_num=?, min_num=?, min_lmt_num=? where grw_cd = ?";
	con.query(qry, [ svy_tp, ssr_id, start_dt, start_tm, end_dt, end_tm, eqp_cd, max_lmt_num, max_num, std_num, min_num, min_lmt_num,grw_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("update Result: " + result);
		console.log("update qry: " + qry);
	});
	
	var param1= {"result": true,"data": {"result":":sucess"}};
	  res.json(param1);
}

function DELETE_RTF_CTRL_SCH(req,res, updrow) {
    var rows = updrow;
	console.log("DELETE");
	var grw_cd = rows["grw_cd"];
	console.log('DELETE Parameter = ' + grw_cd);
		
	var qry = "delete from rtf_msch_info where grw_cd = ?";
	con.query(qry, [grw_cd], function (err, result, fields) {
		if (err) throw err;
		console.log("delete Result: " + result);
		console.log("delete qry: " + qry);
	});
	  
	var param1= {"result": true,"data": {"result":":sucess"}}
	  res.json(param1);

}