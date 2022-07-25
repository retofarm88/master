
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
      { name: 'loc_cd', header:'코드', editor: 'text', width: 60 ,align:"center"},
      { name: 'loc_nm', header:'위치명', editor: 'text', width: 120,align:"center" },
      { name: "up_loc", header:"상위위치", editor: "text", width: 120, align:"center" },
     
   ]
 ,
 data: [
                    {
                      "loc_cd": "1",
                      "loc_nm": "1층1동_느타리버섯",
                      "up_loc": "1층1동"
                    },
                    {
                      "loc_cd": "2",
                      "loc_nm": "2층2동_영지버섯",
                      "up_loc": "2층2동"
                    }
                  
                  ]

  ,rowHeaders: [
      { type: 'rowNum' }
    ]
} )

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
      var img = document.createElement("img");
      img.src = path;
      img.width =280
      el.appendChild(img);
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