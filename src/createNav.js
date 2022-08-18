const getNav = () => {
    return document.querySelector(".nav");
}

const addIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

const addText = (text) => {
    const textNode = document.createTextNode(text);
    return textNode;
}

const createNavObject = (icon_name, text) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.append(addIcon(icon_name), addText(text));
    return container;
}

function appendToNav() {
    getNav().append(createNavObject("inbox", "Inbox"));
    getNav().append(createNavObject("event", "Today"));
    getNav().append(createNavObject("date_range", "This Week"));
}

appendToNav();