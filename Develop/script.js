const moment = require("moment");
const moment = require('moment');

var date = moment().format("MMM Do YY");


var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
    var currentTime = moment().format('H');
    for(var i = 0; i < timeOfday.length; i++)

};

$(".saveBtn").on("click", function() {
    var timeOfday =$(this).parent().attr("id");
})

$("9am").children("input").val(localStorage.getItem("9am"));

$("10am").children("input").val(localStorage.getItem("10am"));

$("11am").children("input").val(localStorage.getItem("11am"));

$("12pm").children("input").val(localStorage.getItem("12pm"));

$("1pm").children("input").val(localStorage.getItem("1pm"));

$("2pm").children("input").val(localStorage.getItem("2pm"));

$("3pm").children("input").val(localStorage.getItem("3pm"));

$("4pm").children("input").val(localStorage.getItem("4pm"));

$("5pm").children("input").val(localStorage.getItem("5pm"));



