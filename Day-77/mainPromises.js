import fs from "fs/promises"


let a =await fs.readFile("gourish.txt");

let b = await fs.appendFile("gourish.txt", "\n\n\n\n\n\n this is a amazing promises");

// console.log(a.toString(), b);

let read = await fs.readFile("Cpp_Question.txt");

console.log(read.toString());
