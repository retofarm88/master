

const addButton = document.querySelector('#add-button');
const saveButton = document.querySelector('#save-button');
const deleteButton = document.querySelector('#delete-button');
const searchButton = document.querySelector('#search-button');
const searchtext = document.querySelector('#search-text');
tesstr ='ttt';

searchButton.addEventListener('click', function(e) {

  if (e.target.id == 'jsGrid') console.log("11")

  console.log('e.target.id'+e.target.id)

  console.log("searchtext:111111111 " + $("#search-text").val())
  var stext =$("#search-text").val();
 
  vgrid.readData(  param =3333 );

});

addButton.addEventListener('click', () => {
	console.log("11")
	var rowData = [loc_cd='', loc_nm='', up_loc='', seq_no='', start_dt='', end_dt='', use_yn='', rmk_dc='']

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
            { name: 'loc_cd', header:'코드', editor: 'text', width: 120 ,align:"center"},
            { name: 'loc_nm', header:'위치명', editor: 'text', width: 150,align:"center" },
            { name: "up_loc", header:"상위위치", editor: "text", width: 120, align:"center" },
            { name: "seq_no", header:"순서", editor: "text", width: 120 ,align:"center"},
            { name: "start_dt", header:"시작일", editor: "text", width: 150 ,align:"center"},
            { name: "end_dt", header:"종료일", editor: "text", width: 150 ,align:"center"},
            { name: "use_yn", header:"사용여부", editor: "text", width: 150 ,align:"center"},
            { name: "rmk_dc", header:"비고", editor: "text", width: 600 ,align:"left"}
         ]
       ,

        data: {
            contentType: 'application/json',

              api: {
                    readData: { url: () => `/RTF_LOC_MST?page_kind=loc_mst&loc_nm=${$("#search-text").val()}`, method: 'GET' },
                    modifyData: { url: '/SAVE_RTF_LOC_MST', method: 'PUT' },
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



