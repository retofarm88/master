

const addButton = document.querySelector('#add-button');
const saveButton = document.querySelector('#save-button');
const deleteButton = document.querySelector('#delete-button');
const searchButton = document.querySelector('#search-button');
const searchtext = document.querySelector('#search-text');
$("#search-label").text("생장코드: ");
tesstr ='ttt';

searchButton.addEventListener('click', function(e) {

  if (e.target.id == 'jsGrid') console.log("11")

  console.log('e.target.id'+e.target.id)

  console.log("searchtext:111111111 " + $("#search-text").val())
  var stext =$("#search-text").val();
 
  vgrid.readData(  param =3333 );

});

addButton.addEventListener('click', () => {
	console.log("addddd")
	var rowData = [grw_cd='',  svy_tp='',  ssr_id='',  start_dt='',  start_tm='',  end_dt='',  end_tm='',  eqp_cd='',  max_lmt_num='',  max_num='',  std_num='',  min_num='',  min_lmt_num='']

	vgrid.appendRow(rowData, {
	at: 0,
	focus: true
	});
});


    saveButton.addEventListener('click', () => {

        vgrid.request('modifyData');
    });

    deleteButton.addEventListener('click', () => {

        vgrid.removeCheckedRows(true);
        vgrid.request('modifyData');
    });
  
   

    const vgrid = new tui.Grid( {
        el: document.getElementById('jsGrid'),
        scrollX : true,
        scrollY : false,
       
        editingEvent : 'click',
        columns: [
            { name: 'grw_cd', header:'생장코드', editor: 'text', width: 120 ,align:"center"},
            { name: 'svy_tp', header:'측정유형', editor: 'text', width: 150,align:"center" },
            { name: "ssr_id", header:"센서ID", editor: "text", width: 120 ,align:"center"},
            { name: "start_dt", header:"시작일", editor: "text", width: 150 ,align:"center"},
            { name: "start_tm", header:"종료일", editor: "text", width: 150 ,align:"center"},
			      { name: "end_dt", header:"종료시간", editor: "text", width: 150 ,align:"center"},
            { name: "end_tm", header:"위치", editor: "text", width: 150 ,align:"center"},
            { name: "eqp_cd", header:"장비", editor: "text", width: 100 ,align:"left"},
            { name: "max_lmt_num", header:"최고상한", editor: "text", width: 100 ,align:"left"},
            { name: "max_num", header:"상한값", editor: "text", width: 100 ,align:"left"},
            { name: "std_num", header:"기준값", editor: "text", width: 100 ,align:"left"},
            { name: "min_num", header:"하한값", editor: "text", width: 100 ,align:"left"},
            { name: "min_lmt_num", header:"최고하한", editor: "text", width: 100 ,align:"left"},
         ]
       ,

        data: {
            contentType: 'application/json',

              api: {
                    readData: { url: () => `/RTF_CTRL_SCH?grw_cd=${$("#search-text").val()}`, method: 'GET' },
                    modifyData: { url: '/SAVE_RTF_CTRL_SCH', method: 'PUT' },
                }
            
	    },
      initialRequest: false ,
       

        
        rowHeaders: [
            { type: 'checkbox' }
          ]
    } )

    vgrid.on('response', ev => {
        const {response} = ev.xhr;
        const responseObj = JSON.parse(response);
      
        console.log('result 11: ', JSON.stringify(responseObj));

        console.log("searchtextrrrrrr " + $("#search-text").val())
      });

      vgrid.on('beforeChange', ev => {
        console.log('before change:', ev);
      });

      vgrid.on('afterChange', ev => {
        console.log('after change:', ev);
      });



