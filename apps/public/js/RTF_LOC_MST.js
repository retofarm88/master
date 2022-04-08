$(function() {

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
                        url: "/RTF_LOC_MST/",
                        data: filter
                    });
                },
                insertItem: function(item) {
                    return $.ajax({
                        type: "POST",
                        url: "/RTF_LOC_MST/",
                        data: item
                    });
                },
                updateItem: function(item) {
					console.log('item', item);
                    return $.ajax({
                        type: "PUT",
                        url: "/RTF_LOC_MST/",
                        data: item
                    });
                },
                deleteItem: function(item) {
                    return $.ajax({
                        type: "DELETE",
                        url: "/RTF_LOC_MST/",
                        data: item
                    });
                }
            },
            fields: [
                { name: "loc_cd", title:"코드", type: "text", width: 150 },
                { name: "loc_nm", title:"위치명", type: "text", width: 150 },
                { name: "up_loc", title:"상위위치", type: "text", width: 150 },
                { name: "seq_no", title:"순서", type: "number", width: 150 },
                { name: "start_dt", title:"시작일", type: "text", width: 150 },
                { name: "end_dt", title:"종료일", type: "text", width: 150 },
                { name: "use_yn", title:"사용여부", type: "text", width: 50 },
                { name: "rmk_dc", title:"비고", type: "text", width: 250 },
                { type: "control" }
            ]
        });


});