const btns = document.querySelectorAll(".Color-changer");
const links = document.querySelectorAll("a");
const hexModeSection = document.getElementsByClassName("hex")[0];
const simpleModeSection = document.getElementsByClassName("simple")[0];

function getNumbers(num) {
  return Math.floor(Math.random() * num);
}
// Has to be in an array
function changeColors(color) {
  return [getNumbers(color), getNumbers(color), getNumbers(color)];
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = `rgb(${changeColors(256)})`;
  });
});
// -----------------------------------------------------------------------------

const simpleLink = document.getElementById("simple-mode");
const hexLink = document.getElementById("hex-mode-link");

function showSimpleMode() {
  simpleModeSection.classList.remove("hide");
  hexModeSection.classList.add("hide");
}

function showHexMode() {
  hexModeSection.classList.remove("hide");
  simpleModeSection.classList.add("hide");
}

simpleLink.addEventListener("click", () => {
  showSimpleMode();
});

hexLink.addEventListener("click", () => {
  showHexMode();
});
