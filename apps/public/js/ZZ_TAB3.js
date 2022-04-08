$(function() {

    $.ajax({
        type: "GET",
        url: "/countries/"
    }).done(function(countries) {

        countries.unshift({ id: "0", name: "" });

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
                        url: "/ZZ_TAB3/",
                        data: filter
                    });
                },
                insertItem: function(item) {
                    return $.ajax({
                        type: "POST",
                        url: "/ZZ_TAB3/",
                        data: item
                    });
                },
                updateItem: function(item) {
					console.log('item', item);
                    return $.ajax({
                        type: "PUT",
                        url: "/ZZ_TAB3/",
                        data: item
                    });
                },
                deleteItem: function(item) {
                    return $.ajax({
                        type: "DELETE",
                        url: "/ZZ_TAB3/",
                        data: item
                    });
                }
            },
            fields: [
                { name: "loc_nm", title: "Name", type: "text", width: 150 },
                { name: "up_loc", title: "Age", type: "number", width: 50, filtering: false },
                { name: "seq_no", title: "Address", type: "text", width: 200 },
                { name: "country_id", title: "Country", type: "select", width: 100, items: countries, valueField: "id", textField: "name" },
                { name: "start_dt", type: "checkbox", title: "Is Married", sorting: false, filtering: false },
                { type: "control" }
            ]
        });

    });


});