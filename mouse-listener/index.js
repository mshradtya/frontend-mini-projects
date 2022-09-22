const xcoordsEl = document.querySelector(".x-coords p");
const ycoordsEl = document.querySelector(".y-coords p");

window.addEventListener("mousemove", (event) => {
    xcoordsEl.innerText = event.clientX;
    ycoordsEl.innerText = event.clientX;
})