function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const orignalelement = document.getElementById(`Cad`);
    const cloneele = orignalelement.cloneNode(true);

    cloneele.querySelector(".title").innerHTML = title;

    cloneele.querySelector(".Channel").innerHTML = cName;

    const vw = (views) => {
        if (1000000000 <= views) return (views / 1000000000).toFixed(1) + `B`;
        if (1000000 <= views) return (views / 1000000).toFixed(1) + `M`;
        if (100000 <= views) return Math.round(views / 1000) + `K`;
        if (1000 <= views) return (views / 1000).toFixed(2) + `K`;
        return views;
    }
    cloneele.querySelector(".views").innerHTML = vw(views) + " views";

    cloneele.querySelector(".months").innerHTML = monthsOld + " months";

    cloneele.querySelector(".duration").innerHTML = duration;

    cloneele.querySelector(`img`).src = thumbnail;

    document.querySelector(".container").append(cloneele);

}

createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 5678961234, 9, "41:22", "https://i.ytimg.com/vi/iZb0NsF3Xwg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAB_6rgXX3MeiQyBQQWsrue0i5YeA");

createCard("Netflix clone using HTML CSS | Sigma Web Dev video #2", "CodeWithHarry", 27346734, 7, "12:62", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("First website made by you HTML CSS #3", "CodeWithHarry", 560000, 6, "9:34", "https://i.ytimg.com/vi/rQoqCP7LX60/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDJvUes26EEl8bmqodFKi9b4xjBjw")

createCard("VsCode Shortcut and Most usefull extension #4", "CodeWithHarry", 99556, 4, "1:22:76", "https://i.ytimg.com/vi/Bd-1YM8taBc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRSmOmWMhL4i6ckKNAGqnyzmfPOw")

createCard("What is inheritence and its types | Javascript course #5", "CodeWithHarry", 120, 2, "59:59", "https://i.ytimg.com/vi/nDmULDo8D18/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtt1OsaXRdweT_ea5mF9_gcmUH8A")