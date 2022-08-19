let sectionId = "Inbox";
let taskName = "";
const getContent = () => {
    return document.getElementById("content");
}

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

const createInput = (input_type,
    id,
    listener_bool,
    listener_type,
    listener_function
) => {
    const input = document.createElement("input");
    input.type = input_type;
    input.setAttribute("id", id);

    if (listener_bool)
        input.addEventListener(listener_type, listener_function);

    return input;
}

const createLabel = () => {
    const label = document.createElement("label");
    label.for = taskName;
    label.innerHTML = taskName;
    return label;
}

const createInputContainer = (label, task, date) => {
    const container = document.createElement("div");
    container.classList.add("inputContainer");
    container.append(label, task, date);
    return container;
}

function closeModal() {
    document.querySelector(".modal").remove();
    addTask();
}

function setTaskName() {
    taskName = this.value;
}

function createTaskModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.append(
        "Please name your task...",
        createInput("text", "createTask", true, "input", setTaskName),
        createButton("check", "Create Task", closeModal)
    );
    modal.appendChild(modalContent);
    getContent().append(modal);
}

function addTask() {
    // alert("Add Task!");
    const taskContainer = document.createElement("div");
    const form = document.createElement("form");
    form.append(createInputContainer(createLabel(taskName), createInput("text", taskName, false, null, null), createInput("date", taskName, false, null, null)));
    taskContainer.append(form);
    getBody().append(taskContainer);
}

const createButton = (icon, text, funct) => {
    const button = document.createElement("button");
    button.append(addIcon(icon));
    button.append(text);
    button.addEventListener("mousedown", funct);
    button.classList.add("button")
    return button;
}

const createBodyObject = () => {
    if (sectionId === "Inbox") {
        const inboxContainer = document.createElement("div");
        inboxContainer.classList.add("inboxContainer");
        inboxContainer.append(createButton("add", "Add Task", createTaskModal));
        return inboxContainer;
    }
    else if (sectionId === "Today") {

    }
    else if (sectionId === "This Week") {

    }
}

function appendToBody() {
    getBody().append(createTitle(), createBodyObject());
}

appendToBody();

export { receiverFunction };