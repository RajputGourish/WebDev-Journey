console.log("script.js is installing");

let button = document.getElementById("btn");

button.addEventListener("contextmenu", () => {
    alert("don't hack us by right click");
})

// button.addEventListener("dblclick", ()=>{
//     // alert("you clicked this!!!!");
//     document.querySelector(".box").innerHTML = "<b>You were clicked</b> Enjoy............";
// })  

// button.addEventListener("click", ()=>{
//     // alert("you clicked this!!!!");
//     document.querySelector(".box").innerHTML = "<b>You were clicked</b> Enjoy............";
// })

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode);
})  