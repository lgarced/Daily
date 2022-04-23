$(document).ready(function () {
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

  function makeTimeblocks(hour, existingTodo = "") {
    //Timeblocks
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if (currentHour > hour) presentPastOrFuture = "past";
    if (currentHour === hour) presentPastOrFuture = "present";
    var saveNotes = localStorage.getItem(`hour${hour}`) || ""
    $(".container").append(
      $(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name=""  placeholder="Write your notes here"cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${saveNotes}</textarea>
        <div id="hour${hour}" class=" saveBtn col-2"> Save 💾</div> 
    </div>`)
    );
  }

  for (var i = 9; i < 19; i++) {
    makeTimeblocks(i);
  }

  
  $(".saveBtn").on("click", function () {
    inputID = $(this).attr("id");
    inputEl = $(this).parent().children()[1].value;
    console.log(inputEl);
    localStorage.setItem(inputID, inputEl);
  });
});

