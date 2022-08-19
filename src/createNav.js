import { receiverFunction } from "./createBody";
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

function listenerFunction() {
    // alert(this.getAttribute("id"));
    receiverFunction(this.getAttribute("id"));
}

const addEvtListener = (element) => {
    element.addEventListener("mousedown", listenerFunction);
}

const createNavObject = (icon_name, text) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", text);
    addEvtListener(container);
    container.append(addIcon(icon_name), addText(text));
    return container;
}

const createDividerLine = () => {
    const dividerLine = document.createElement("hr");
    return dividerLine;
}

const createH1 = (text) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = text;
    return h1;
}

function appendToNav() {
    getNav().append(createNavObject("inbox", "Inbox"));
    getNav().append(createNavObject("event", "Today"));
    getNav().append(createNavObject("date_range", "This Week"));
    getNav().append(createDividerLine());
    getNav().append(createH1("Projects"));
}

appendToNav();