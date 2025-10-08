

function quality(name) {
    console.log("hey " + name + " you are nice!!");
    console.log("hey " + name + " you are good!!");
    console.log("hey " + name + " you are looking like a wao!!");
    console.log("hey " + name + " great knowledge!!");

}

function sum(a, b, c=3) {
    // console.log(a + b);

    return (a + b + c);
}

result = sum(3, 5);
result2 = sum(5, 5);
result3 = sum(7, 5, 1);

console.log("This sum of 3 and 5 is : " + result);
console.log("This sum of 3 and 5 is : " + result2);
console.log("This sum of 3 and 5 is : " + result3);


console.log();


const func1 = (x)=>{
    console.log("i am a arrow function : ", x);
    
}


func1(45);
func1(33);
func1(54);
