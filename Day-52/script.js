let random = Math.random();

console.log(random);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");


if (0.1 < random) {
    // COrrect method 
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else {
    // faulty
    b = obj[b];

    alert(`The result of is ${eval(`${a} ${b} ${c}`)}`);

}