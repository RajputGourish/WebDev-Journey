//  5.The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.



function SumSelector(arr) {
    let sum = 0;
    for (const el of arr) {
        if (el < 0) break;
        sum += el;
    }

    return sum;
}
console.log(SumSelector([1, 2, 3, 4, 5]));
