// function to search through ajax
var city = $("#cityInput");
function testingSite() {
  //Clear testing center area
  $("#searchResults").empty();
  
  //The state input field
  var state = $("#state").val().toLowerCase();

  //Ajax request
  $.ajax({
    url:
      "https://covid-19-testing.github.io/locations/" +
      state +
      "/complete.json",
    method: "GET",
  }).then(function (response) {
    //testing response

    //set up a loop to pull from each object based on city
    for (var i = 0; i < response.length; i++) {
      //Creating container for testing location
      var location = $("<div>");
      location.addClass("pure-u-1-1");
      location.attr("id", "locationDiv");
      //Location Name
      var locationName = $("<h2>");
      locationName.attr("id", "locationAttr");
      locationName.text(response[i].name);
      //Phone number
      var phoneNumber = $("<p>");
      phoneNumber.attr("id", "phoneNumberAttr");
      phoneNumber.text(response[i].phones[0].number);
      //Address
      var locationAddress = $("<p>");
      locationAddress.attr("id", "addressAttr");
      locationAddress.text(
        response[i].physical_address[0].address_1 +
          " " +
          response[i].physical_address[0].city +
          " " +
          response[i].physical_address[0].state_province
      );
      //Save buuton
      var testingSaveBtn = $("<button>");
      testingSaveBtn.addClass("saveBtn");
      var saveIcon = $("<i>").addClass("far fa-share-square");
      testingSaveBtn.append(saveIcon);
      //Hours of operations
      var hoursOperation = $("<p>");
      hoursOperation.attr("id", "hoursAttr");
      hoursOperation.text();
      //Description
      var description = $("<p>");
      description.attr("id", "descriptionAttr");
      description.text(response[i].description);
      //Appending to div
      location.append(locationName);
      location.append(testingSaveBtn);
      location.append(phoneNumber);
      location.append(locationAddress);
      location.append(description);
      //Appending to the page
      $("#searchResults").append(location);
    }
    $("#state").text(" ");
  })}
// click event from a button
$("#search").on("click", testingSite);
