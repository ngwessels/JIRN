
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


// document.getElementById("content");
// document.addEventListener("submit", handle);



function handle(e){
  debugger;
  e.preventDefault(); // Otherwise the form will be submitted
    }




// $(document).ready(function() {
//   $("button#submission").submit(function(event) {
//     window.location.replace = "www.google.com";
//     event.preventDefault();
//   })
// })
