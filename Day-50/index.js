let random = Math.random();
console.log(random);


function FaultyCalc(a, b, s) {

    if ("+" === s) {
        if (0.1 > random) {
            // faulty calc
            return a - b;
        }
        else {
            return a + b;
        }
    }
    else if ("*" === s) {
        if (0.1 > random) {
            // faulty calc
            return a + b;
        }
        else {
            return a * b;
        }
    }
    else if ("-" === s) {
        if (0.1 > random) {
            // faulty calc
            return a / b;
        }
        else {
            return a - b;
        }
    }
    else if ("/" === s) {
        if (0.1 > random) {
            // faulty calc
            return a ** b;
        }
        else {
            return a / b;
        }
    }
    else {
        return "wrong input";
    }
}

function FaultyCalc2(a, b, s) {
    //  Faulty cacl
    if (0.1 > random) {
        if ("+" === s) {
            return a - b;
        }
        else if ("*" === s) {
            return a + b;
        }
        else if ("-" === s) {
            return a / b;
        }
        else if ("/" === s) {
            return a ** b;
        }
    }
    // normal
    else {
        if ("+" === s) {
            return a + b;
        }
        if ("*" === s) {
            return a * b;
        }
        if ("-" === s) {
            return a - b;
        }
        if ("/" === s) {
            return a / b;
        }
    }
}

console.log(FaultyCalc(4, 2, "/"));
console.log(FaultyCalc2(4, 2, "/"));