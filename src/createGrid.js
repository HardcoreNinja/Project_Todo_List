const getContent = () => {
    return document.getElementById("content");
}

const createTitle = () => {
    const title = document.createElement("div");
    title.classList.add("title");
    return title;
}

const createNav = () => {
    const nav = document.createElement("div");
    nav.classList.add("nav");
    return nav;
}

const createBody = () => {
    const body = document.createElement("div");
    body.classList.add("body");
    return body;
}

function appendToContent() {
    getContent().append(createTitle());
    getContent().append(createNav());
    getContent().append(createBody());
}

appendToContent();