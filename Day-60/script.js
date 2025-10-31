let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());  // create array form 0 to number

    let ans = arr.slice(1).reduce((a, b) => a * b);
    return ans; ``
};

function Loopfactorial(number) {
    let res = 1;
    for (let i = 1; i <= number; i++) {
        res = res * i;
    }
    return res;
}
console.log(factorial(a));
console.log(Loopfactorial(a));
