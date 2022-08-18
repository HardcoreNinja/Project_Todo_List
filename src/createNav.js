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

const createInbox = () => {
    const inboxContainer = document.createElement("div");
    inboxContainer.classList.add("container");
    inboxContainer.append(addIcon("inbox"), addText("Inbox"));
    return inboxContainer;
}

function appendToNav() {
    getNav().append(createInbox());
}

appendToNav();