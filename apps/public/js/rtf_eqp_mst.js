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
						url: "/rtf_eqp_mst/",
						data: filter
					});
				},
				insertItem: function(item) {
					return $.ajax({
						type: "POST",
						url: "/rtf_eqp_mst/",
						data: item
					});
				},
				updateItem: function(item) {
					console.log('item', item);
					return $.ajax({
						type: "PUT",
						url: "/rtf_eqp_mst/",
						data: item
					});
				},
				deleteItem: function(item) {
					return $.ajax({
						type: "DELETE",
						url: "/rtf_eqp_mst/",
						data: item
					});
				}
			},
			fields: [
				{ name: "eqp_cd", title:"코드", type: "text", width: 150 },
				{ name: "eqp_nm", title:"장비명", type: "text", width: 150 },
				{ name: "offset", title:"오프셋", type: "text", width: 150 },
				{ name: "mdl_nm", title:"모델", type: "text", width: 150 },
				{ name: "srl_num", title:"시리얼번호", type: "text", width: 150 },
				{ name: "loc_cd", title:"위치", type: "select", width: 150, items: locations, valueField: "loc_cd", textField: "loc_nm" },
				{ name: "use_yn", title:"사용여부", type: "text", width: 50 },
				{ name: "rmk_dc", title:"비고", type: "text", width: 250 },
				{ type: "control" }
			]
		});

	});

});