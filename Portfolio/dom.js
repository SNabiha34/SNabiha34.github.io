// Get the slogan element
const slogan = document.getElementById("sloganText");

// Store the original color
const originalColor = slogan.style.color || "black";

// When mouse enters -> change color
slogan.addEventListener("mouseover", function() {
  slogan.style.color = "tomato"; // change to any color you like
});

// When mouse leaves -> revert color
slogan.addEventListener("mouseout", function() {
  slogan.style.color = originalColor;
});

