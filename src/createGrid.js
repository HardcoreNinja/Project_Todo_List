const getContent = () => {
    return document.getElementById("content");
}

const createContent = (grid_area) => {
    const content = document.createElement("div");
    content.classList.add(grid_area);
    return content;
}

function appendToContent() {
    getContent().append(createContent("title"));
    getContent().append(createContent("nav"));
    getContent().append(createContent("body"));
}

appendToContent();