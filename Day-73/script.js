console.log(`Hello World!!!`);

let sleep = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(34);
        }, 1000);
    })
}



(async function main() {
    // console.log(a1);



    // let a = await sleep();
    // console.log(`${a}`);

    // let b = await sleep();
    // console.log(`${b}`);


    // let x, y = [1, 2];
    // let [x, y] = [1, 2];
    // let [x, y, ...rest] = [1, 2, 7, 9, 11, 12, 24, 35, 46, 46, 5, 7, 7, 6,];
    // console.log(x, y, rest);

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }

    // let { b, c } = obj;
    // console.log(b, c);

    let arr = [1, 2, 3];
    // console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));

    // let obj = { ...arr };
    // let a = "the", b = "better";
    // let c = {a, b};
    // console.log(c);

    var a1 = 6;


})()


function sum(a, b, c) {

    return a + b + c;
};
