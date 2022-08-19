let sectionId = null;

const getBody = () => {
    return document.querySelector(".body");
}

function receiverFunction(id) {
    // alert(id);
    sectionId = id;
    clearBody();
    appendToBody();
}

const createTitle = () => {
    const title = document.createElement("h1");
    title.innerHTML = sectionId;
    return title;
}

function clearBody() {
    while (getBody().firstChild)
        getBody().removeChild(getBody().firstChild);
}

function appendToBody() {
    getBody().append(createTitle());
}

export { receiverFunction };