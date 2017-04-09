//GLOBAL//
var sumOfCalories;
var userCalories;
///////////////////////////////////////////////////////////////

var myDiary = function () {
    var initModule = function () {
        alert("init Module");
        $("#cmdAdd").click(add);
        $("#cmdEdit").click(edit);
        $("#cmdRemove").click(remove);
        $("#selectAll").click(selectAll);
        fillTableItems();
    };
   
    var fillTableItems = function () {
        if (localStorage.getItem("Items") == undefined)
            return;

        $("tr:gt(0)").remove();

        var items = JSON.parse(localStorage.getItem("Items"));
        console.log(items);
        $.each(items, function (i, item) {
            var row;
            if (i % 2 == 0) {
                row = "<tr class = 'even'>";
            }
            else {
                row = "<tr class = 'odd'>";
            }
            row += "<td><input id='selectOne' type='checkbox'></td>" +
                "<td>" + item.date + "</td>" +
                "<td>" + item.name + "</td>" +
                "<td>" + item.calories + "</td>" +
                "<td>" + item.marks + "</td>" +
                "</tr>";

            $("tr:last").after(row);
        });
        alert("after each");
    };
    ///////////////////////////////////
    var selectAll = function (e) {
        var table = $(e.target).closest('table');
        $('td input:checkbox', table).prop('checked', this.checked);
    };

    ///////////////////////////////////
    var add = function () {
        alert("add finc");
        var date = $("#txtDate").val();
        var name = $("#txtItem").val();
        var cal = $("#txtCalories").val();
        var marks = $("#txtMarks").val();
        var item = { date: date, name: name, calories: cal, marks: marks };
        addItem(item);
        fillTableItems();
    }

    var remove = function () {
        var i = 0;
        if (document.getElementById("selectAll").checked == true) {
            if (confirm("האם אתה בטוח שברצונך למחוק את הכל?") == true) {
                if (localStorage.getItem("Items") != undefined)
                    localStorage.removeItem("Items");
                localStorage.setItem("Items", JSON.stringify([]));
                fillTableItems();
                document.getElementById("selectAll").checked = false;
            }
        }
        else {
            $('input:checkbox').each(function () {
                if ($(this).is(':checked')) {
                    if(confirm(" האם אתה בטוח שברצונך למחוק פריט זה?")==true)
                    {
                        alert("inside remove item " + i);
                        var itemsStr = localStorage.getItem("Items");
                        var itemsObj = JSON.parse(itemsStr);
                        itemsObj.splice(i-1, 1);
                        localStorage.setItem("Items", JSON.stringify(itemsObj));
                        itemsStr = localStorage.getItem("Items");
                        fillTableItems();
                       // console.log(itemsStr);
                       // fromLocalstrToList();
                    }
                }
                i += 1;
            })

        }
    };

    var edit = function () {
        alert("edit");
        var i = 0;
        $('input:checkbox').each(function () {
            if ($(this).is(':checked')) {
                alert("checked");
                if (confirm(" האם אתה בטוח שברצונך לעדכן את הפריט? ") == true) {
                    var itemsStr = localStorage.getItem("Items");
                    var itemsObj = JSON.parse(itemsStr);
                   
                    var newDate = $("#txtDate").val();
                    var newName = $("#txtItem").val();
                    var newCal = $("#txtCalories").val();
                    var newMarks = $("#txtMarks").val();
                    
                    if (newDate != "")
                        itemsObj[i - 1].date = newDate;
                    if (newName != "")
                        itemsObj[i - 1].name = newName;
                    if (newCal != "")
                        itemsObj[i - 1].calories = newCal;
                    if (newMarks != "")
                        itemsObj[i - 1].marks = newMarks;

                    localStorage.setItem("Items", JSON.stringify(itemsObj));
                    fillTableItems();
                }
            }
            i += 1;
        })
    };

    var addItem = function (item) {
        var itemsStr = localStorage.getItem("Items");
        var itemsObj = JSON.parse(itemsStr) || [];
        itemsObj.push(item);
        localStorage.setItem("Items", JSON.stringify(itemsObj));
    };

    return {
        initModule: initModule,
    };
}();

$(document).ready(myDiary.initModule);
