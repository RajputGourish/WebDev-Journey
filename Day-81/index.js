// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip 

const fs = require("fs");
const path = require("path");

const directory = path.resolve();


const myfiles = fs.readdirSync(directory, { withFileTypes: true });


for (const file of myfiles) {

    if (file.isFile() && file.name != "index.js") {

        if (!fs.existsSync(`${path.extname(file.name).substring(1)}`)) {
            try {
                fs.mkdirSync(`${path.extname(file.name).substring(1) || "no_ext"}`);
                console.log("created");
            } catch (err) {
                console.error(`Error creating directory: ${err.message}`);
            }
        }

        fs.renameSync(`${file.name}`, `${path.extname(file.name).substring(1)}/${file.name}`, (err) => {
            if (err) {
                console.error(`Failed to move ${file.name}:`, err.message);
            } else {
                console.log(`Moved: ${file.name}`);
            }
        });
    }
}







