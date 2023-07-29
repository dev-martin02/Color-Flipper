const btns = document.querySelectorAll(".Color-changer");
const links = document.querySelectorAll("a");
const rgbModeSection = document.getElementsByClassName("rgb")[0];
const simpleModeSection = document.getElementsByClassName("simple")[0];
const bigText = document.getElementsByClassName("Big-text")[0];
const rgbText = document.getElementsByClassName("Big-text")[1];

// Get the color of the background
function getNumbers(num) {
  return Math.floor(Math.random() * num);
}
// Has to be in an array
function changeColors(color) {
  return [getNumbers(color), getNumbers(color), getNumbers(color)];
}

function simpleColor() {
  return changeColors(256);
}

let background = document.body.style.backgroundColor;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = `rgb(${simpleColor()})`;
    bigText.innerHTML = `This color is ${document.body.style.backgroundColor}`;
    rgbText.innerHTML = `This color is ${document.body.style.backgroundColor}`;
  });
});

// -----------------------------------------------------------------------------
// change the visibility of the section
const simpleLink = document.getElementById("simple-mode");
const rgbLink = document.getElementById("rgb-mode-link");

function showSimpleMode() {
  simpleModeSection.classList.remove("hide");
  rgbModeSection.classList.add("hide");
}

function showRgbMode() {
  rgbModeSection.classList.remove("hide");
  simpleModeSection.classList.add("hide");
}

simpleLink.addEventListener("click", () => {
  showSimpleMode();
});

rgbLink.addEventListener("click", () => {
  showRgbMode();
  bigText.innerHTML = document.body.style.backgroundColor;
});
