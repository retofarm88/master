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
                        url: "/ZZ_TAB30/",
                        data: filter
                    });
                },
                insertItem: function(item) {
                    return $.ajax({
                        type: "POST",
                        url: "/ZZ_TAB30/",
                        data: item
                    });
                },
                updateItem: function(item) {
					console.log('item', item);
                    return $.ajax({
                        type: "PUT",
                        url: "/ZZ_TAB30/",
                        data: item
                    });
                },
                deleteItem: function(item) {
                    return $.ajax({
                        type: "DELETE",
                        url: "/ZZ_TAB30/",
                        data: item
                    });
                }
            },
            fields: [
                { name: "zz_col2", title: "Name", type: "text", width: 150 },
                { name: "zz_col3", title: "Age", type: "number", width: 50, filtering: false },
                { name: "zz_col4", title: "Address", type: "text", width: 200 },
                { name: "zz_col5", type: "checkbox", title: "Is Married", sorting: false, filtering: false },
                { type: "control" }
            ]
        });


});