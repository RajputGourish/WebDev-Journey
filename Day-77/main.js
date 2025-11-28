console.log(`Hello World!!!`);

const fs = require("fs");
// const fs = require("fs/promises");

console.log("Starting");
// fs.writeFileSync("gourish.txt", "gourish is a good boy");

fs.writeFile("Gourish2.txt", "Gourish is a good boy2", () => {
    console.log("done");
    fs.readFile("Gourish2.txt", (error, data) => {
        console.log(error, data.toString());

    })
})

fs.appendFile("gourish.txt", "\nappending start so here we go", (e, d) => {
    console.log(d);
})
console.log("ending");
