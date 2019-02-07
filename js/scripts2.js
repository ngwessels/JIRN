function main(input) {
  debugger;
  console.log(input);
  if (input == "No") {
    // $("#navigate").hide();
    $("#map").hide();
    $("#home-page-search-bar").hide();
    $("#home-page-head").hide();
    $("#home-page-links").hide();
    $("#buttonNW").hide();
    $("#buttonNE").hide();
    $("#buttonSE").hide();
    $("#buttonSW").hide();
    // $(".jumbotron").hide();
    $("#infowindow-content").hide();
    $("#sorry").show();
    $("#headerLinks").show();
  }
}

function city(city) {
  var str = "HERE";
  var link = str.link("index.html");
    $("#sorry").html("Sorry, but the city of " + city + " is not in our system. We currently only serve Portland Oregon and are working on expansion! Press " + "<a href='index.html'>" + "HERE" + "</a>" + " to go Home!");
}




main(localStorage.getItem("display"));
city(localStorage.getItem("city"));
