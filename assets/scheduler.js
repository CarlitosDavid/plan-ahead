// need to display day and date
$(document).ready(function() {
  var todayDate = moment().format('dddd, MMM, Do YYYY');
  let displayDate = document.getElementById("currentDay");
  let currentHour = moment().format("HH");
  $("#currentDay").html(todayDate);
  
  
   //button function to clear storage and clear value
   $("#clearFeildsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
   // hours from each time slot. 
    $(".time-div").each(function() {
    var timeDiv = $(this).attr("id").split("-")[1];
  
     if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("grey-text");
  
     }
     else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
  
     }
     else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
     }
  
    });
  
    
  
  
  // need to grab value and time to save them to local storage
  
  $(".saveBtn").click(function (event) {
   event.preventDefault();
   var value = $(this).siblings(".time-block").val();
   var time = $(this).parent().att("id").split("-")[1];
   localStorage.setItem(time, value);
  
  });
  
  // grab items from local storage
  $("#hour-08 .time-block").val(localStorage.getItem("08"));
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
  $("#hour-18 .time-block").val(localStorage.getItem("18"));
  $("#hour-19 .time-block").val(localStorage.getItem("19"));
  $("#hour-20 .time-block").val(localStorage.getItem("20"));
  $("#hour-21 .time-block").val(localStorage.getItem("21"));
  $("#hour-22 .time-block").val(localStorage.getItem("22"));
  $("#hour-23 .time-block").val(localStorage.getItem("23"));
  $("#hour-24 .time-block").val(localStorage.getItem("24"));

});  


