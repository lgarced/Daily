
$(document).ready(function () {
  // console.log("just testing");
  //define my variables for today's date and the time right now
  let currentDay = moment().format("LLLL");
  let currentTime = moment().hour();

  //update elements with localStorage values
  for (key = 0; key < localStorage.length; key++) {
    timeID = localStorage.key(key);
    timeValue = localStorage.getItem(timeID);
    $("#" + timeID).val(timeValue);
  }

  //display today's date in the currentDate id
  $("#currentDay").append(currentDay);

  $("input").each(function () {
    var item = parseInt($(this).attr("time"));

    console.log(item);
    // console.log(currentTime)
    if (item < currentTime) {
      $(this).addClass("past");
    }

    if (item > currentTime) {
      $(this).addClass("present");
    }

    if (item === currentTime) {
      $(this).addClass("future");
    }
  });

  $("button").on("click", function () {
    //assigning the value to from input to variable
    inputID = $(this).attr("input-id");
    inputEl = $(document.getElementById(inputID));

    // inputEl = $($(this).parent().children()[0]);

    calendarEvent = inputEl.val();
    console.log($(this).val());
    console.log($(this).parent);
    localStorage.setItem(inputEl.attr("id"), calendarEvent);
  });
});
