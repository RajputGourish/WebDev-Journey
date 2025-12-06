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

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = path.resolve();

let files = await fs.readdir(basepath);


for (const file of files) {
    console.log(`Running for ${file}`);

    let ext = file.split(".")[file.split(".").length - 1];
    if (ext != "js" && ext != "json" && file.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to directory if its not a js and json file
            fs.rename(path.join(basepath, file), path.join(basepath, ext, file));
        }
        else {
            fs.mkdir(ext);
            fs.rename(path.join(basepath, file), path.join(basepath, ext, file));
        }
    }
}