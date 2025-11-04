console.log("Script.js installing");

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;

function getrandomColor() {
    let val1 = Math.ceil(Math.random() * 255 + 0);
    let val2 = Math.ceil(Math.random() * 255 + 0);
    let val3 = Math.ceil(Math.random() * 255 + 0);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach((e) => {
    e.style.backgroundColor = getrandomColor();
    e.style.color = getrandomColor();
})