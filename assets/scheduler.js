// need to display day and date
var todayDate = moment().format('dddd, MMM, Do YYYY');

$(document).ready(function () {
  $("#currentDay").html(todayDate);

})