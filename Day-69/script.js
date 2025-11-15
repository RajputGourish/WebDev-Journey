const random = () => {
    rand = Math.ceil(Math.random() * (7 - 1) + 1);
    console.log(`${rand}`);
    return rand;
}


async function getdata() {
    //    simulate getting data from server 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, random() * 1000);
    })
}

async function main() {
    await getdata();
    let html = `<div class="message">
        Initializing Hacking
        <div class="dots">
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="dot3">.</div>
        </div>
    </div>`
    document.body.innerHTML = document.body.innerHTML + html;

    await getdata();
    document.querySelector(".dots").remove();
    html = `<div class="message">
        Reading your files
        <div class="dots">
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="dot3">.</div>
        </div>
    </div>`
    document.body.innerHTML = document.body.innerHTML + html;

    await getdata();
    document.querySelector(".dots").remove();
    html = `<div class="message">
        Password file detected
        <div class="dots">
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="dot3">.</div>
        </div>
    </div>`
    document.body.innerHTML = document.body.innerHTML + html;

    await getdata();
    document.querySelector(".dots").remove();
    html = `<div class="message">
        Sending all file and passwords and personal files to server
        <div class="dots">
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="dot3">.</div>
        </div>
    </div>`

    document.body.innerHTML = document.body.innerHTML + html;

    await getdata();
    document.querySelector(".dots").remove();
    html = `<div class="message">
        cleaning up
        <div class="dots">
            <div class="dot1">.</div>
            <div class="dot2">.</div>
            <div class="dot3">.</div>
        </div>
    </div>`
    document.body.innerHTML = document.body.innerHTML + html;
}


main();
