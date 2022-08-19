let sectionId = "Inbox";

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

const addIcon = (icon_name) => {
    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.innerHTML = icon_name;
    return span;
}

function addTask() {
    alert("Add Task!");
}

const addEvtListener = (button) => {
    button.addEventListener("mousedown", addTask)
}

const createButton = (icon, text) => {
    const button = document.createElement("button");
    button.append(addIcon(icon));
    button.append(text);
    addEvtListener(button);
    button.classList.add("button")
    return button;
}



const createBodyObject = () => {
    if (sectionId === "Inbox") {
        return createButton("add", "Add Task");
    }
    else if (sectionId === "Today") {

    }
    else if (sectionId === "This Week") {

    }
}

function appendToBody() {
    getBody().append(createBodyObject());
}

appendToBody();

export { receiverFunction };