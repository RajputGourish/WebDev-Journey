console.log(`this is working perfectly`);
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr
    if (views < 1000) {
        viewstr = views;
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }
    else {
        viewstr = views / 1000 + "K";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="img">
                <div class = "capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 12300000, 9, "41:22", "https://i.ytimg.com/vi/iZb0NsF3Xwg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAB_6rgXX3MeiQyBQQWsrue0i5YeA");