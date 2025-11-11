console.log("Ritik is  a hacker");
console.log("Priyanshu is  a hecker");

setTimeout(() => {
    console.log("i am inside a timeout");

}, 10);


setTimeout(() => {
    console.log("i am inside a timeout2");

}, 0);

console.log("The end");

const func = () => {
    console.log("Nothing!!");
}

const callback = (arg, func) => {
    console.log(arg);
    func();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gourish", func);
    document.head.append(sc);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", callback);
