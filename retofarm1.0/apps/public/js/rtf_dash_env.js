
const addButton = document.querySelector('#add-button');
const saveButton = document.querySelector('#save-button');
const deleteButton = document.querySelector('#delete-button');
const searchButton = document.querySelector('#search-button');
const searchtext = document.querySelector('#search-text');
const searchlabel = document.querySelector('#search-label');

addButton.style.display = 'none'
saveButton.style.display = 'none'
deleteButton.style.display = 'none'
searchButton.style.display = 'none'
searchtext.style.display = 'none'
searchlabel.style.display = 'none'

const vgrid = new tui.Grid( {
  el: document.getElementById('dashGrid'),
  scrollX : true,
  scrollY : false,
 
  //editingEvent : 'click',
  columns: [
      { name: 'grw_cd', header:'코드', editor: 'text', width: 60 ,align:"center"},
      { name: 'grw_nm', header:'위치명', editor: 'text', width: 120,align:"center" },
      { name: "loc_cd", header:"상위위치", editor: "text", width: 120, align:"center" },
     
   ]
 ,
  data: {
    contentType: 'application/json',

    api: {
          readData: { url: () => `/rtf_chart_loc`, method: 'GET' },
      }
    
  }
  ,initialRequest: false 

  ,rowHeaders: [
      { type: 'rowNum' }
    ]
    ,selectionUnit: 'row'
} )


vgrid.on('click', function(ev) {

  console.log(vgrid.getRow(ev.rowKey).grw_cd);
  
  var grw_cd =vgrid.getRow(ev.rowKey).grw_cd;
  
  $.ajax({
    url : "rtf_chart_sel_loc?grw_cd="+grw_cd, // 어디로 갈거니? // 갈 때 데이터
    type : "get", // 타입은 뭘 쓸거니?
    datatype : "json",
    success : function(data) { // 갔다온 다음 결과값

      console.log("1111");
      var resdata = JSON.parse(JSON.stringify(data[0]));
      console.log("cur_num =" + resdata["cur_num"]);
      var el = document.getElementById("img-env_text");
      el.textContent = resdata["cur_num"];

      resdata = JSON.parse(JSON.stringify(data[1]));
      var el = document.getElementById("img-env2_text");
      el.textContent = resdata["cur_num"];

      resdata = JSON.parse(JSON.stringify(data[2]));
      var el = document.getElementById("img-env3_text");
      el.textContent = resdata["cur_num"];

      resdata = JSON.parse(JSON.stringify(data[3]));
      var el = document.getElementById("img-env4_text");
      el.textContent = resdata["cur_num"];




      // var resdata2 = JSON.parse(resdata);
      // console.log("resdata =" + resdata);
     
    },
    error : function() {
      console.log("error" );
    }
  });
  
  
  
});

    categ= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '19'];
    categ2= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

    colo = '#458a3f';
    makeChart('chart-area',categ,'#458a3f');
    makeChart('chart-area2',categ2,'#295ba0');
    makeChart('chart-area3',categ2,'#516f7d');
    makeChart('chart-area4',categ2,'#458a3f');

    makeImg('img-area',"img/shelf.png");
    makeImg('img-area2',"img/mush_move.gif");

    makeImgCur('img-env',"img/climate.png");
    makeImgCur('img-env2',"img/humidity.png");
    makeImgCur('img-env3',"img/co2.png");
    makeImgCur('img-env4',"img/illu.png");

    function makeImg(ename,path){
      var el = document.getElementById(ename);

      
      var img = document.createElement("img");
      img.src = path;
      img.width =380

      el.appendChild(img);


    }
  
    function makeImgCur(ename,path){
      var el = document.getElementById(ename);

      var di = document.createElement("div");
      di.className="jb-image";
      el.appendChild(di);

      var img = document.createElement("img");
      img.src = path;
      img.width =380
      di.appendChild(img);

      var di2 = document.createElement("div");
      di2.className="jb-text";
      di2.id = ename + "_text";
      el.appendChild(di2);

      //di2.textContent="123";

    }


    function makeChart(area,cat,col)
    {
      var container = document.getElementById(area);
      var data = {
        categories: cat,
        series: [
            {
                name: '온도',
                data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
            },
            
          
        ]
      };
      var options = {
        chart: {
            width: 600,
            height: 300,
            title: '센서관리',
            format: '1,000'
        },
        yAxis: {
            title: '온도'
        },
        xAxis: {
            title: '시간'
        },
        series: {
            barWidth: 30
        },
        tooltip: {
            grouped: true
        },
        legend: {
            align: 'bottom4000'
        }

        
      };

      var theme = {
        series: {
            colors: [
                col
            ]
        }
    };

      tui.chart.registerTheme('myTheme', theme);
      options.theme = 'myTheme';
      tui.chart.columnChart(container, data, options);

      

    }