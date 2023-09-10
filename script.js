var container = document.querySelector(".container");
var button = document.querySelector("button");

button.addEventListener("click", function() {
  var message = ["Happy Birthday!", "Wishing you a year filled with joy, laughter, and love.", "May all your wishes come true."];
  var index = Math.floor(Math.random() * message.length);
  container.innerHTML = message[index];
});