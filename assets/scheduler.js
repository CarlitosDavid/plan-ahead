// need to display day and date
$(document).ready(function() {
  var todayDate = moment().format('dddd, MMM, Do YYYY');
  let currentHour = moment().format("HH");
 
  $("#currentDay").html(todayDate);
  
   // hours from each time slot. 
    $(".time-div").each(function() {
    var timeDiv = $(this).attr("id").split("-")[1];
  
     if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
  
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

    

  

});  


