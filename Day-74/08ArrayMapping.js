// 8.Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function getdata(arr) {
    let newarr = [];
    for (const element of arr) {
        newarr.push(await new Promise((resolve) => {
            setTimeout(() => {
                resolve(element * 2);
            }, 500);
        }));
    }
    return newarr;
}
async function main() {

    console.log(`loading modules`);


    console.log(`do something else`);

    console.log(`load data`);

    let arr = [2, 3, 4, 5, 4, 5, 6, 7, 8, 9];
    const data = await getdata(arr);

    console.log(`process data`);

    console.log(`task 2`);

    console.log("terminated");
}
main();


