const getTitle = () => {
    return document.querySelector(".title");
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

const createTitleObject = (icon_name, text) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.append(addIcon(icon_name), addText(text));
    return container;
}

function appendToTitle() {
    getTitle().append(createTitleObject("task_alt", "Todo List"));
}

appendToTitle();