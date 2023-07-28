const btns = document.querySelectorAll(".Color-changer");

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
