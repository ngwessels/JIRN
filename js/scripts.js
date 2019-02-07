
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
  $('#datetimepicker').datetimepicker();
  $("#newEntry").click(function(event){
    event.preventDefault();
    $("#entryForm").show();
  });
  $("#entryForm").submit(function(event){
    event.preventDefault();
    var date = $("input#datetimepicker").val();
    var space = $("input#place").val();
    var thoughts = $("input#thoughts").val();
    $("#newEntries").append("<div class=card card-default id=diaryCard>" + "<h3>" + "When: " + date + "</h3>" + "<h4 class='card-title'>" + "Where: " + space + "</h4>" + "<br>" + "<h4>" +"<u>"+ "Experience:" + "</u>" + "<p>"+thoughts+"</p>" + "</h4>" + "</div>");
    space = "";
    thoughts = "";
    $("input#place").value = "";
    $("input#thoughts").value = "";
    $("#entryForm").hide();
  });
});

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // console.log(slides)
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
