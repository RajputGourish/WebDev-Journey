console.log(`Hello World!!!`);

const cntvowel = (str) => {
    let cnt = 0;
    for (const ch of str) {
        if (ch === `a` || ch === `A` ||
            ch === `e` || ch === `E` ||
            ch === `i` || ch === `I` ||
            ch === `o` || ch === `O` ||
            ch === `u` || ch === `U`) {
            cnt++;
        }
    }
    return cnt;
}

console.log(cntvowel("aeiOU"));
