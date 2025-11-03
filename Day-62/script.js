console.log("hello");

document.querySelector(".box").innerHTML;  // show inner content

document.querySelector(".box").innerText;  // show inner Text

document.querySelector(".box").outerHTML;  // show inner content

document.querySelector(".box").tagName;  // show tag like div span etc

document.querySelector(".box").nodeName;  // show tag any tyoe of element, comments etc

document.querySelector(".box").textContent;  // show inner content etc

// document.querySelector(".box").hidden = true;  // hide from screen

document.querySelector(".box").innerHTML = "Ram is great";

document.querySelector(".box").hasAttribute("style");

document.querySelector(".box").getAttribute("style");

// document.querySelector(".box").setAttribute("style", "display:inline");

document.querySelector(".box").attributes;

// document.querySelector(".box").removeAttribute("style"); 

document.querySelector(".box").dataset;


let div = document.createElement("div");    // create div element
div.innerHTML = "i has be inserting <b>by Ritik</b>"; // create inner content
div.setAttribute("class", "created");  // attribute of div
// document.querySelector(".container").append(div); // succesfully inserted at last
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div); 
// document.querySelector(".box").replaceWith(div); 


let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforeend", "<b>hey i am under the water please help.....oijfjfs</b>"); 
// cont.insertAdjacentText("beforebegin", "hey how was your day going on!!!!!!!!!"); 
// cont.insertAdjacentElement("afterbegin", div); 

// document.querySelector(".box").remove();
// document.querySelector(".box").remove();


document.querySelector(".container").classList;
document.querySelector(".container").className;

// document.querySelector(".container").classList.add("redish")

// document.querySelector(".container").classList.remove("red")

// document.querySelector(".container").classList.add("redish redu redm")
// document.querySelector(".container").classList.remove("redish" ,"redu" ,"redm")