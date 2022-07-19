$(function() {

        $("#jsGrid").jsGrid({
            height: "70%",
            width: "100%",
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
                        url: "/ZZ_TAB80/",
                        data: filter
                    });
                },
                insertItem: function(item) {
                    return $.ajax({
                        type: "POST",
                        url: "/ZZ_TAB80/",
                        data: item
                    });
                },
                updateItem: function(item) {
					console.log('item', item);
                    return $.ajax({
                        type: "PUT",
                        url: "/ZZ_TAB80/",
                        data: item
                    });
                },
                deleteItem: function(item) {
                    return $.ajax({
                        type: "DELETE",
                        url: "/ZZ_TAB80/",
                        data: item
                    });
                }
            },
            fields: [
                { name: "zz_col1", title:"zz_col1", type: "text", width: 150 },
                { name: "zz_col2", title:"zz_col2", type: "text", width: 150 },
                { name: "zz_col3", title:"zz_col3", type: "text", width: 150 },
                { name: "zz_col4", title:"zz_col4", type: "text", width: 150 },
                { name: "zz_col5", title:"zz_col5", type: "text", width: 150 },
                { name: "zz_col6", title:"zz_col6", type: "text", width: 150 },
                { name: "zz_col7", title:"zz_col7", type: "text", width: 150 },
                { name: "zz_col8", title:"zz_col8", type: "text", width: 150 },
                { type: "control" }
            ]
        });


});