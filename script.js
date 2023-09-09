var body = document.querySelector(".body");
var generatedValue = document.querySelector("#generatedValue");
var angle = document.querySelector("#angle");
var color1 = document.querySelector("#color1");
var color1Value = document.querySelector("#color1Value");
var color2 = document.querySelector("#color2");
var color2Value = document.querySelector("#color2Value");
var generateButton = document.querySelector("#generateButton");

function updateBackgroundColor() {
  var hexColor1 = color1.value;
  var hexColor2 = color2.value;
  var gradientAngle = angle.value;

  body.style.background = `linear-gradient(${gradientAngle}deg, ${hexColor1}, ${hexColor2})`;
  
  generatedValue.textContent = `linear-gradient(${gradientAngle}deg, ${hexColor1}, ${hexColor2})`;
  color1Value.textContent = hexColor1;
  color2Value.textContent = hexColor2;
}

color1.addEventListener("input", updateBackgroundColor);
color2.addEventListener("input", updateBackgroundColor);

generateButton.addEventListener("click", updateBackgroundColor);

updateBackgroundColor();
