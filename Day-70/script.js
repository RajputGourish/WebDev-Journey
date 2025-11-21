console.log(`Hello World!!!`);

let x = prompt("Enter the first number");
let y = prompt("Enter the second number");

if (isNaN(x) || isNaN(y)) {
    throw SyntaxError(`Sorry this is now allowed`)
}

let sum = parseInt(x) + parseInt(y);
function main() {
    let h = 1;
    try {
        console.log(`the sum is ${sum * h}`);
        return true;
    } catch (error) {
        console.log(`Error aa gya bhai`);
        // console.log(`${error}`);
        // console.log(error.name);
        // console.log(error.message);
        // console.log(error.stack);
        return false;
    }
    finally {
        console.log(`files are closed and db connection is being closed`);
    }
}
let r = main();
