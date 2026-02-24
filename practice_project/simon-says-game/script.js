let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;

        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // choose random color
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);

    gameFlash(randbtn);
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelup(), 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";

        }, 1000);
        reset();
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}