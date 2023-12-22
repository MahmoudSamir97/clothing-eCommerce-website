"use strict";

// changing active profile slide//
function showContent(contentType) {
  document.querySelectorAll(".cell").forEach(function (cell) {
    cell.classList.remove("active");
  });

  document.querySelectorAll(".adminContent > div").forEach(function (content) {
    content.classList.remove("active-content");
  });

  document
    .querySelector("." + contentType + "-content")
    .classList.add("active-content");
  document.querySelector("." + contentType).classList.add("active");
}
// redirect to home page//////////////////////////
// Get a reference to the div element
var myDiv = document.getElementById("home");

// Add a click event listener to the div
myDiv.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "main.html"; // Replace with your desired URL
});
/////////////////////////////////////////////////
