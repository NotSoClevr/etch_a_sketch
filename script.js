const container = document.querySelector("#container");

/*
create a 16x16 grid of divs
*/
for (i = 1; i < 257; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    newDiv.setAttribute("id", `square${i}`)
    container.appendChild(newDiv);
};

// random background color generator
function bGColor(frm, to) {
  return Math.floor(Math.random() * (to - frm)) + frm;
}

let COLORS = [];

while (COLORS.length < 100) {
    COLORS.push(`rgb(${bGColor(0, 255)}, ${bGColor(0, 255)}, ${bGColor(0, 255)})`)
}


// change background color on hover

const grid = document.querySelectorAll(".grid");

grid.forEach((square, index) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = COLORS[index % COLORS.length];
    });
})