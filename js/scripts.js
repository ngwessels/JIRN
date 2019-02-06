// -
function expand() {
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}
$('button').on('click', expand);



$(document).ready(function(){
  $("#newEntry").click(function(event){
    event.preventDefault();
    $("#entryForm").show();
  });
  $("#entryForm").submit(function(event){
    event.preventDefault();
    var space = $("input#place").val();
    var thoughts = $("input#thoughts").val();
    $("#newEntries").append("<div class=card card-default id=diaryCard>" + "<h3 class='card-title'>" + space + "</h3>" + "<br>" + "<p>" + thoughts + "</p>" + "</div>");
    space = "";
    thoughts = "";
    $("input#place").value = "";
    $("input#thoughts").value = "";
    $("#entryForm").hide();
  });
});

// "<div class=card>" "<div class=card-body>" "<p class=card-text>" + space + "</p>" "</div>" "</div>")
