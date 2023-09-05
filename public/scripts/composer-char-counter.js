$(document).ready(function() {

  //event handler for textarea
  $("#tweet-text").on("input", function() {
    const charLimit = 140;
    const inputText = $(this).val().length;
    const charCount = charLimit - inputText;

    // Update counter text
    $(".counter").text(charCount);

    //Check if charCount is negative (exceeded the limit)
    if (charCount < 0) {
      $(".counter").addClass("counter-exceeded");
    } else {
      $(".counter").removeClass("counter-exceeded");
    }
    });
  }); 