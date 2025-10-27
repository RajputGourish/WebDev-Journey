console.log("hello world");

//  loop method

function LoopFactorial(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i;
    }
    return res;
}

console.log(LoopFactorial(6));


// reduce array 

let arr = [1, 2, 3, 4, 5, 6];

const redfact = ((a, b) => {
    return a * b;
});

console.log(arr.reduce(redfact));


//  recursion func

const recursionFact = ((num) => {
    if (num == 1 || num == 0) return 1;
    return num * recursionFact(num - 1);
});

console.log(recursionFact(6));