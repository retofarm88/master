

const addButton = document.querySelector('#add-button');
const saveButton = document.querySelector('#save-button');
const deleteButton = document.querySelector('#delete-button');
const searchButton = document.querySelector('#search-button');
const searchtext = document.querySelector('#search-text');
tesstr ='ttt';

$("#search-label").text("장비명: ");

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
            { name: 'eqp_cd', header:'코드', editor: 'text', width: 120 ,align:"center"},
            { name: 'eqp_nm', header:'장비명', editor: 'text', width: 150,align:"center" },
            { name: "offset_cd", header:"오프셋", editor: "text", width: 120 ,align:"center"},
            { name: "mdl_nm", header:"모델", editor: "text", width: 150 ,align:"center"},
            { name: "srl_num", header:"시리얼번호", editor: "text", width: 150 ,align:"center"},
			{ name: "loc_cd", header:"위치", editor: "text", width: 150 ,align:"center"},
            { name: "use_yn", header:"사용여부", editor: "text", width: 150 ,align:"center"},
            { name: "rmk_dc", header:"비고", editor: "text", width: 600 ,align:"left"}
         ]
       ,

        data: {
            contentType: 'application/json',

              api: {
                    readData: { url: () => `/RTF_EQP_MST?eqp_nm=${$("#search-text").val()}`, method: 'GET' },
                    modifyData: { url: '/SAVE_RTF_EQP_MST', method: 'PUT' },
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



