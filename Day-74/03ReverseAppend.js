//   3.The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

const joddo = (s1, s2) => {
    return s1 + s2;
}

function Reverse(str) {
    let res = "";
    let j = str.length - 1;
    while(j >= 0){
        res += s[j];
        j--;
    }
    return res;
}

const s = "badab";
const r = Reverse(s);

console.log(joddo(s, r));
