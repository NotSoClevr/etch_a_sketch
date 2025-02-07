const container = document.querySelector("#container");
const style = document.getElementById("style");

// create a 16x16 grid of divs

for (i = 1; i < 257; i++) {
  let flexPercent = 960 / 17;
  let twoDeci = flexPercent.toFixed(2);
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid");
  newDiv.id = `grid${i}`;
  style.innerHTML = `#container>div {width: ${twoDeci}px;
  height: ${twoDeci}px;
    `;
  container.appendChild(newDiv);
  getGridSquares();
};

// random background color generator
function bGColor(frm, to) {
  return Math.floor(Math.random() * (to - frm)) + frm;
};

let COLORS = [];

while (COLORS.length < 100) {
  COLORS.push(
    `rgb(${bGColor(0, 255)}, ${bGColor(0, 255)}, ${bGColor(0, 255)})`
  );
};

// change background color on hover
function getGridSquares() {
  const grid = document.querySelectorAll(".grid");

  grid.forEach((square, index) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = COLORS[index % COLORS.length];
    });
  });
};

// remove 16x16 grid and create a new custom grid when button is pressed

const btn = document.querySelector("button");

function removeElem() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

btn.addEventListener("click", () => {
  removeElem();
  
  let custGrid = prompt("Enter the number of rows/columns you want:");
while (!/^[1-9][0-9]?$|^100$/.test(custGrid)) {
  alert("Enter a number between 1 and 100.");
  custGrid = prompt("Enter the number of rows/columns you want: ");
};
  let num = parseInt(custGrid);
  let totalSquares = (num * num) + 1;
  let twoDeci = Math.floor(960 / (num + 1));
  for (x = 1; x < totalSquares; x++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    style.innerHTML = `#container>div {width: ${twoDeci}px;
        height: ${twoDeci}px;`;
    container.appendChild(newDiv);
  };
  const grid = document.querySelectorAll(".grid");
  getGridSquares();
  grid.forEach((square) => {
    square.style.backgroundColor = "";
  });
});
