

const addButton = document.querySelector('#add-button');
const saveButton = document.querySelector('#save-button');
const deleteButton = document.querySelector('#delete-button');
const searchButton = document.querySelector('#search-button');
const searchtext = document.querySelector('#search-text');
tesstr ='ttt';
$("#search-label").text("센서명: ");
searchButton.addEventListener('click', function(e) {

  if (e.target.id == 'jsGrid') console.log("11")

  console.log('e.target.id'+e.target.id)

  console.log("searchtext:111111111 " + $("#search-text").val())
  var stext =$("#search-text").val();
 
  vgrid.readData(  param =3333 );

});

addButton.addEventListener('click', () => {
	console.log("11")
	var rowData = [ssr_id = '',ssr_nm = '', ssr_use ='', addr ='', eqp_cd = '', loc_cd = '', max_lmt_num = '' , max_num= '' , std_num= '' , min_num= '' , min_lmt_num= '' , use_yn= '' , rmk_dc = '']

	vgrid.appendRow(rowData, {
	at: 0,
	focus: true
	});
});


    saveButton.addEventListener('click', () => {
      const { rowKey, columnName } = vgrid.getFocusedCell();
      console.log("columnName=" + columnName);
      if (rowKey !=null && columnName !=null) {
       
        vgrid.finishEditing(rowKey, columnName);
      }
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
           

			{ name: "ssr_id"    	 , header:"센서ID", editor: "text", width: 50 },
			{ name: "ssr_nm"     , header:"센서명", editor: "text", width: 100 },
			{ name: "ssr_use"    , header:"센서용도", editor: "text", width: 150 },
			{ name: "addr"       , header:"어드레스", editor: "text", width: 100 },
			{ name: "eqp_cd"     , header:"장비", editor: "text", width: 50 },
			{ name: "loc_cd"     , header:"위치", editor: "text", width: 50},
			{ name: "useall_yn"  , header:"24시간동작여부", editor: "text", width: 150 },
			{ name: "max_lmt_num", header:"최고상한", editor: "text", width: 50 },
			{ name: "max_num"	, header:"상한값", editor: "text", width: 100 },
			{ name: "std_num"	, header:"기준값", editor: "text", width: 100 },
			{ name: "min_num"	, header:"하한값", editor: "text", width: 100 },
			{ name: "min_lmt_num"	, header:"최고하한", editor: "text", width: 50 },
			{ name: "use_yn"	, header:"사용여부", editor: "text", width: 50 },
			{ name: "rmk_dc"	, header:"비고", editor: "text", width: 200 },
			
         ]
       ,

        data: {
            contentType: 'application/json',

              api: {
                    readData: { url: () => `/RTF_SSR_MST?ssr_nm=${$("#search-text").val()}`, method: 'GET' },
                    modifyData: { url: '/SAVE_RTF_SSR_MST', method: 'PUT' },
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



