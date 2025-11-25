// 2.The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 3, 4, 5];


function DoubleTrouble(arr) {
    if (!Array.isArray(arr)) return [];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        }
        else {
            result.push(arr[i]);
        }

    }
    return result;

}

console.log(arr);
console.log(DoubleTrouble(arr));