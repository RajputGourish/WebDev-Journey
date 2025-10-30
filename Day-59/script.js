console.log("Hello World");

// let boxes = document.getElementsByClassName("box");

// console.log(boxes);

// boxes[2].style.backgroundColor = "red";


// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "yellow";
});


// console.log(document.getElementsByTagName("div"));


let e = document.getElementsByTagName("div")

e[4].matches("#redbox");    // false
e[5].matches("#redbox");    // true
e[5].matches(".box");       // true 


// console.log(e[5].closest(".container"));       

//  .contains


document.querySelector(".container").contains(document.querySelector("body")); // false
document.querySelector("body").contains(document.querySelector(".container"));  // true 
