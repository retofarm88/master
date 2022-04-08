$(function() {

    $.ajax({
        type: "GET",
        url: "/RTF_LOC_MST/"
    }).done(function(locations) {

        //locations.unshift({ loc_cd: "0", loc_nm: "" });

		$("#jsGrid").jsGrid({
			height: "70%",
			width: "90%",
			filtering: true,
			inserting: true,
			editing: true,
			sorting: true,
			paging: true,
			autoload: true,
			pageSize: 10,
			pageButtonCount: 5,
			deleteConfirm: "Do you really want to delete client?",
			controller: {
				loadData: function(filter) {
					return $.ajax({
						type: "GET",
						url: "/rtf_ssr_mst/",
						data: filter
					});
				},
				insertItem: function(item) {
					return $.ajax({
						type: "POST",
						url: "/rtf_ssr_mst/",
						data: item
					});
				},
				updateItem: function(item) {
					console.log('item', item);
					return $.ajax({
						type: "PUT",
						url: "/rtf_ssr_mst/",
						data: item
					});
				},
				deleteItem: function(item) {
					return $.ajax({
						type: "DELETE",
						url: "/rtf_ssr_mst/",
						data: item
					});
				}
			},
			fields: [
				{ name: "ssr_id"     , title:"센서ID", type: "text", width: 50 },
				{ name: "ssr_nm"     , title:"센서명", type: "text", width: 100 },
				{ name: "ssr_use"    , title:"센서용도", type: "text", width: 150 },
				{ name: "addr"       , title:"어드레스", type: "text", width: 50 },
				{ name: "eqp_cd"     , title:"장비", type: "text", width: 50 },
				{ name: "loc_cd"     , title:"위치", type: "select", width: 50, items: locations, valueField: "loc_cd", textField: "loc_nm" },
				{ name: "useall_yn"  , title:"24시간동작여부", type: "text", width: 50 },
				{ name: "max_lmt_num", title:"최고상한", type: "text", width: 50 },
				{ name: "max_num", title:"상한값", type: "text", width: 50 },
				{ name: "std_num", title:"기준값", type: "text", width: 50 },
				{ name: "min_num", title:"하한값", type: "text", width: 50 },
				{ name: "min_lmt_num", title:"최고하한", type: "text", width: 50 },
				{ name: "use_yn", title:"사용여부", type: "text", width: 50 },
				{ name: "rmk_dc", title:"비고", type: "text", width: 50 },
				{ type: "control" }
			]
		});

	});

});