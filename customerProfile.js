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
