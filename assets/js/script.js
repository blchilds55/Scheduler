function updateTime() {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

function updateInputColors() {
    for(i = 1; i <= 9; i++) {
        var getIdNumber = $("#" + (i + 8).toString()).attr("id");
        
        if (getIdNumber < parseInt(moment().format("HH")), 10) {
            $("#to-do" + i.toString()).addClass("bg-secondary");
        }
        else if (getIdNumber == parseInt(moment().format("HH")), 10) {
            $("#to-do" + i.toString()).addClass("bg-danger");
        }
        else {
            $("#to-do" + i.toString()).addClass("bg-success");
        }
    }
}

$('#add-to-do1').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do1").val().trim();
    localStorage.setItem("todolist1", JSON.stringify(toDoValue));
});

$('#add-to-do2').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do2").val().trim();
    localStorage.setItem("todolist2", JSON.stringify(toDoValue));
});

$('#add-to-do3').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do3").val().trim();
    localStorage.setItem("todolist3", JSON.stringify(toDoValue));
});

$('#add-to-do4').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do4").val().trim();
    localStorage.setItem("todolist4", JSON.stringify(toDoValue));
});

$('#add-to-do5').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do5").val().trim();
    localStorage.setItem("todolist5", JSON.stringify(toDoValue));
});

$('#add-to-do6').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do6").val().trim();
    localStorage.setItem("todolist6", JSON.stringify(toDoValue));
});

$('#add-to-do7').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do7").val().trim();
    localStorage.setItem("todolist7", JSON.stringify(toDoValue));
});

$('#add-to-do8').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do8").val().trim();
    localStorage.setItem("todolist8", JSON.stringify(toDoValue));
});

$('#add-to-do9').on('click', function(event) {
    event.preventDefault();
    var toDoValue = $("#to-do9").val().trim();
    localStorage.setItem("todolist9", JSON.stringify(toDoValue));
});

function loadToDos() {
    var display1 = localStorage.getItem('todolist1') || "";
    var display2 = localStorage.getItem('todolist2') || "";
    var display3 = localStorage.getItem('todolist3') || "";
    var display4 = localStorage.getItem('todolist4') || "";
    var display5 = localStorage.getItem('todolist5') || "";
    var display6 = localStorage.getItem('todolist6') || "";
    var display7 = localStorage.getItem('todolist7') || "";
    var display8 = localStorage.getItem('todolist8') || "";
    var display9 = localStorage.getItem('todolist9') || "";

    $("#to-do1").val(display1.slice(1, -1));
    $("#to-do2").val(display2.slice(1, -1));
    $("#to-do3").val(display3.slice(1, -1));
    $("#to-do4").val(display4.slice(1, -1));
    $("#to-do5").val(display5.slice(1, -1));
    $("#to-do6").val(display6.slice(1, -1));
    $("#to-do7").val(display7.slice(1, -1));
    $("#to-do8").val(display8.slice(1, -1));
    $("#to-do9").val(display9.slice(1, -1));
}

updateInputColors();
loadToDos();
setInterval(updateTime, 1000);
setInterval(updateInputColors, 3600000);

