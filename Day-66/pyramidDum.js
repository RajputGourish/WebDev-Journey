console.log("Ritik is  a hacker");
console.log("Priyanshu is  a hecker");

setTimeout(() => {
    console.log("i am inside a timeout");

}, 10);


setTimeout(() => {
    console.log("i am inside a timeout2");

}, 0);

console.log("The end");


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gourish");
    document.head.append(sc);
}

//  pyramid dum
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", (arg, fn) => {
    console.log(arg);
    fn("ritik", () => {
        ddg("secondarg", () => {

        })
    });
});
