// Access the DOM element
let slogan = document.getElementById("sloganText");

// Store its original color from the DOM
let originalColor = slogan.style.color || "black";

// DOM Event: mouse over
slogan.addEventListener("mouseover", function() {
  slogan.style.color = "tomato"; // change color in DOM
});

// DOM Event: mouse out
slogan.addEventListener("mouseout", function() {
  slogan.style.color = originalColor; // revert color in DOM
});
