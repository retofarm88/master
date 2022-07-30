
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
      { name: 'grw_cd', header:'코드',   width: 60 ,align:"center"},
      { name: 'grw_nm', header:'위치명', width: 120,align:"center" },
      { name: "loc_cd", header:"상위위치", width: 120, align:"center" },
     
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
  var grw_cd =vgrid.getRow(ev.rowKey).grw_cd;
  console.log("ev.rowKey ="+ev.rowKey);
  console.log("ev.rowKey =" +grw_cd);
  
  reqSelLoc(grw_cd);
  //reqchartvalues(grw_cd);

});


function reqchartvalues(svy_tp,grw_cd,area,colo,ti){
  var xarray=[];
  var yarray=[];
  $.ajax({
    url : "rtf_chart_values?svy_tp="+svy_tp+"&grw_cd="+grw_cd, 
    type : "get", 
    datatype : "json",
    success : function(data) {

      console.log("1111");

      data.forEach(function(item){
        console.log("item.hh =" +item.hh);
        xarray.push(item.hh);
    });

    data.forEach(function(item){
      console.log("item.hh =" +item.avg);
      yarray.push(item.avg);
  });
     
      console.log("data="+data);


      makeChart(area,xarray,yarray,colo,ti);
      
      },
      error : function() {
        console.log("error" );
      }
    });
  }


  function initFunc(){
    categ= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19];
    categ2= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

    colo = '#458a3f';
    reqchartvalues('A',2022001,'chart-area','#458a3f','온도');
    reqchartvalues('B',2022001,'chart-area2','#295ba0','습도');
    reqchartvalues('C',2022001,'chart-area3','#516f7d','CO2');
    reqchartvalues('D',2022001,'chart-area4','#458a3f','조도');

    makeImg('img-area',"img/shelf.png");
    makeImg('img-area2',"img/mush_move.gif");

    makeImgCur('img-env',"img/climate.png");
    makeImgCur('img-env2',"img/humidity.png");
    makeImgCur('img-env3',"img/co2.png");
    makeImgCur('img-env4',"img/illu.png");

    reqSelLoc(2022001);
    //reqchartvalues(2022001);
  }

    
  
  function makeChart(area,catx,caty,colo,ti)
  {
    var container = document.getElementById(area);
    var data = {
      categories: catx,
      series: [
          {
              name: ti,
              data: caty
          },
          
        
      ]
    };
    var options = {
      chart: {
          width: 600,
          height: 300,
          //title: ti,
          format: '1,000'
      },
      yAxis: {
          title: ti
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
            colo
          ]
      }
  };

    tui.chart.registerTheme('myTheme', theme);
    options.theme = 'myTheme';
    tui.chart.columnChart(container, data, options);

    

  }


function reqSelLoc(grw_cd){
  //var grw_cd =vgrid.getRow(rowKey).grw_cd;

  $.ajax({
    url : "rtf_chart_sel_loc?grw_cd="+grw_cd, // 어디로 갈거니? // 갈 때 데이터
    type : "get", // 타입은 뭘 쓸거니?
    datatype : "json",
    success : function(data) { // 갔다온 다음 결과값

      console.log("1111");
      //var resdata = JSON.parse(JSON.stringify(data[0]));
      //console.log("cur_num =" + data[0]["cur_num"]);
      var el = document.getElementById("img-env_text");
      el.textContent = data[0]["cur_num"] + " ℃";

      var el = document.getElementById("img-env2_text");
      el.textContent = data[1]["cur_num"]+ " %";

      var el = document.getElementById("img-env3_text");
      el.textContent = data[2]["cur_num"]+ " ppm";

      var el = document.getElementById("img-env4_text");
      el.textContent = data[3]["cur_num"]+ " lux";

      
      },
      error : function() {
        console.log("error" );
      }
    });
  }



  initFunc();

    
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

