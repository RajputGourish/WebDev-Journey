import path, { basename, dirname } from "path";

// console.log(path);

let mypath = "/home/gourish/Desktop/Sigma Web Development/Tut87-file/gourish.txt";
console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));

console.log(path.join("/home:", "\\random\\gourish.txt"));

console.log(path.join());