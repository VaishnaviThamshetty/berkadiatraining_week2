function Table(items) {
    var myTableHead = document.getElementById("table_display");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var tr = document.createElement('TR');
    tr.classList.add("thead-dark");
    tableBody.appendChild(tr);
    var headings = ["item_id", "item_name", "item_cost"];
    for (var _i = 0, headings_1 = headings; _i < headings_1.length; _i++) {
        var heading = headings_1[_i];
        var th = document.createElement('TH');
        th.appendChild(document.createTextNode(heading));
        tr.appendChild(th);
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var tr = document.createElement('TR');
        var ele1 = document.createElement('TD');
        var ele2 = document.createElement('TD');
        var ele3 = document.createElement('TD');
        ele1.appendChild(document.createTextNode(item.item_id.toString()));
        ele2.appendChild(document.createTextNode(item.item_name.toString()));
        ele3.appendChild(document.createTextNode(item.item_cost.toString()));
        tr.appendChild(ele1);
        tr.appendChild(ele2);
        tr.appendChild(ele3);
        tableBody.appendChild(tr);
    }
    myTableHead.appendChild(table);
}
// students data
var users = [
    { item_id: 1, item_name: "Pen", item_cost: 10 },
    { item_id: 2, item_name: "Book", item_cost: 150 },
    { item_id: 3, item_name: "Pencil", item_cost: 5 },
    { item_id: 4, item_name: "Table", item_cost: 2000 },
    { item_id: 5, item_name: "chair", item_cost: 200 },
    { item_id: 6, item_name: "sofa", item_cost: 50000 }
];
//entry point
Table(users);
