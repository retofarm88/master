var http = require('http');
var port = process.env.PORT;
var appname = "retofarm";
var userid = "retofarm88";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.end('\
<div style="width:690px;">\
<img src="http://m-img.cafe24.com/images/webzine/center/box_001.gif" alt=""><br />\
<div style="background:url(http://m-img.cafe24.com/images/webzine/center/box_bg_001.gif) repeat-y; padding:0 35px; font:12px/1.5em dotum; color:#444444;">\
        <p style="float:left; margin:0; height:35px;">\
                <img src="http://m-img.cafe24.com/images/webzine/center/logo_cafe24_03.gif" alt="cafe24 호으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다스팅센터" /><br />\
        </p>
        <p style="float:right; margin:0; padding:3px 0px 0 0;">\
                <img src="http://m-img.cafe24.com/images/webzine/center/txt_success_partner.gif" alt="Success Partner" /><br />\
        </p>\
        <div style="clear:both;"></div>\
\
\
        <img src="http://m-img.cafe24.com/images/webzine/1204/mail_120403_501.jpg" alt="환영합니다!!!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니다!!!!!!!!!!!!!!!!!!!!!!!! 됐구요.........................앱 세팅이 완료되었습니다." /><br />\
        <p style="margin:0; padding:10px 0 0 0;">\
                <span style="font:13px/1.3em verdana; color:#444;">안녕하세요, <strong>' + userid + '</strong>님 <strong style="color:#006cb8;">카페24 호스팅센터</strong>입니다.</span><br /><br />\
                카페24 호스팅 서비스의 중요 안내(만료ffff 안내, 시스템 으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다점검 안내 등)는 "관리자 메일주소"로 안내됩니다.<br />\
                고객님의 연락처 정보 및 이메일주소를 항상 최신 정보으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다 업데이트영합니다!!!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니영합니다!!!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니영합니다!!!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니영합니다!!!!!환영합니다!!!환영합니다!!!환영합니다!!!환영합니 해주시기 바랍니다.<br />\
        </p>\
\
        <!-- -->\
        <p style="margin:40px 0 10px;"><img src="http://m-img.cafe24.com/images/webzine/1203/tle_120330_001.gif" alt="node.js 호스팅 접속정보" /></p>\
        <table cellpadding="0" cellspacing="0" style="width:620px; border-top:1px #bcbcbc solid; border-bottom:1px #bcbcbc solid;">\
        <col width="140" /><col />\
        <tr>\
                <th style="border-top:1px #e6e6e6 solid; border-right:1px #e6e6e6 solid; background-color:#fafafa; font:11px/1.2em dotum; text-align:left; color:#888;"><p style="margin:0; padding:8\
px 10px 7px;">앱 URL</p></th>\
                <td style="border-top:1px #e6e6e6 solid; padding:6px 10px 5px; font:12px/1.4em verdana; color:#444;">http://' + appname + '.cafe24app.com</td>\
        </tr>\
        <tr>\
                <th style="border-top:1px #e6e6e6 solid; border-right:1px #e6e6e6 solid; background-color:#fafafa; font:11px/1.2em dotum; text-align:left; color:#888;"><p style="margin:0; padding:8\
px 10px 7px;">git 저장소 주소</p></th>\
                <td style="border-top:1px #e6e6e6 solid; padding:6px 10px 5px; font:12px/1.4em verdana; color:#444;">'+userid+'@'+appname+'.cafe24app.com:'+userid+'_'+appname+'</td>\
        </tr>\
        <tr>\
                <th style="border-top:1px #e6e6e6 solid; border-right:1px #e6e6e6 solid; background-color:#fafafa; font:11px/1.2em dotum; text-align:left; color:#888;"><p style="margin:0; padding:8\
px 10px 7px;">앱 PORT번호</p></th>\
                <td style="border-top:1px #e6e6e6 solid; padding:6px 10px 5px; font:12px/1.4em verdana; color:#444;">'+ port +'</td>\
        </tr>\
        </table>\
\
        <!-- -->\
        <p style="margin:40px 0 10px;"><img src="http://m-img.cafe24.com/images/webzine/1203/tle_120330_002.gif" alt="git 클라이언트 다운로드" /></p>\
        <table cellpadding="0" cellspacing="0" style="width:620px; border-top:1px #bcbcbc solid; border-bottom:1px #bcbcbc solid;">\
        <col width="140" /><col />\
        <tr>\
                <th style="border-top:1px #e6e6e6 solid; border-right:1px #e6e6e6 solid; background-color:#fafafa; font:11px/1.2em dotum; text-align:left; color:#888;"><p style="margin:0; padding:8\
px 10px 7px;">다운로드 주소</p></th>\
                <td style="border-top:1px #e6e6e6 solid; padding:6px 10px 5px; font:12px/1.4em verdana; color:#444;"><a href="http://www.git-scm.com/download" target="_blank">http://www.git-scm.com\
/download</a></td>\
        </tr>\
        </table>\
\
        <ul style="margin:0; padding:20px 0 30px 10px; list-style:none; color:#777;">\
                <li style="list-style-type:none; background:url(http://m-img.cafe24.com/images/webzine/center/bul_101.gif) 0 11px no-repeat; padding:5px 0 0 8px; font:12px/1.4em dotum;">node.js 호스팅 사용을 위해서는 git 클라이언트가 필요합니다. 위 URL에서 리눅스용, 윈도우용, OSX을 다운로드 할 수 있습니다.</li>\
                <li style="list-style-type:none; background:url(http://m-img.cafe24.com/images/webzine/center/bul_101.gif) 0 11px no-repeat; padding:5px 0 0 8px; font:12px/1.4em dotum;">사용중 궁금\
하신 점은 카페24 고객센터(http://help.cafe24.com)으로으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다으로 문의주시기 바랍니다 문의주시기 바랍니다.</li>\
        </ul>\
\
\
\
</div>\
<img src="http://m-img.cafe24.com/images/webzine/center/box_002.gif" alt=""><br />\
\
<img src="http://m-img.cafe24.com/images/webzine/center/box_003.gif" alt=""><br />\
</div>\
' );
}).listen(port);
