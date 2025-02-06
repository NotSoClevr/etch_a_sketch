const container = document.querySelector("#container");

/*
psuedocode

create a 16x16 grid of divs

*/
for (i = 1; i < 257; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
};