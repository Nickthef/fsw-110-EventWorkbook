var box = document.querySelector(".red-box");

box.addEventListener("mouseover", function(event) {
  box.innerHTML = "x: " + event.x + "<br/>" + "y: " + event.y;
});
