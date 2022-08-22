import {
    save,
    deleteTask,
    loadTasksFromLocalStorage
} from "./inboxLogic.js";

let sectionId = "Inbox";

let taskName = "";

const getContent = () => {
    return document.getElementById("content");
}

const getBody = () => {
    return document.querySelector(".body");
}

function appendTasksFromLocalStorage(i, string) {
    const stringArray = string.split(",");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("savedTaskContainer");
    taskContainer.setAttribute("id", i + "TC");

    taskContainer.innerHTML = "Title: " + stringArray[0] + '<br>' + '<br>' +
        "Task: " + stringArray[1] + '<br>' + '<br>' +
        "Due Date: " + stringArray[2];

    taskContainer.append(createButton("delete_forever", "Delete", deleteTask, i, false), createDividerLine());

    getBody().append(taskContainer);
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
    input.required = true;
    input.setAttribute("id", id);

    if (listener_bool)
        input.addEventListener(listener_type, listener_function);

    return input;
}

const createLabel = (id) => {
    const label = document.createElement("label");
    label.setAttribute("id", id);
    label.for = taskName;
    label.innerHTML = taskName;
    return label;
}

const createInputContainer = (label, task, date, button) => {
    const container = document.createElement("div");
    container.classList.add("inputContainer");
    container.append(label, task, date, button);
    return container;
}

function closeModal() {
    if (document.getElementById("createTaskForm").reportValidity()) {
        document.querySelector(".modal").remove();
        addTask();
    }
}

function setTaskName() {
    taskName = this.value;
}

function createTaskModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const form = document.createElement("form");
    form.setAttribute("id", "createTaskForm");
    form.append(
        "Please name your task...",
        createInput("text", "createTask", true, "input", setTaskName),
        createButton("check", "Create Task", closeModal, "closeModalButton", true)
    );

    modalContent.append(form);
    modal.appendChild(modalContent);
    getContent().append(modal);
}

const createButton = (icon, text, funct, id, submitButton) => {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    if (submitButton)
        button.type = "submit";
    button.append(addIcon(icon));
    button.append(text);
    button.addEventListener("mousedown", funct);
    button.classList.add("button")
    return button;
}

const createDividerLine = () => {
    const dividerLine = document.createElement("hr");
    return dividerLine;
}

function addTask() {
    // alert("Add Task!");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", taskName + "TC");
    taskContainer.classList.add("taskContainer");
    const form = document.createElement("form");
    form.setAttribute("id", taskName + "Form");
    form.append(createInputContainer(createLabel(taskName + "Label"), createInput("text", taskName + "Task", false, null, null), createInput("date", taskName + "Date", false, null, null), createButton("save", "Save", save, taskName, true)));
    taskContainer.append(form);
    getBody().append(taskContainer);
}

const createInboxObject = () => {
    const inboxContainer = document.createElement("div");
    inboxContainer.classList.add("inboxContainer");
    inboxContainer.append(createButton("add", "Add Task", createTaskModal, "addTaskButton", false));
    return inboxContainer;
}

function appendToBody() {
    if (sectionId === "Inbox")
        getBody().append(createTitle(), createInboxObject());
    else if (sectionId === "Today" || sectionId === "This Week")
        getBody().append(createTitle());

    loadTasksFromLocalStorage();
}

appendToBody();

export {
    receiverFunction,
    createButton,
    createDividerLine,
    appendTasksFromLocalStorage,
    getBody, sectionId, taskName
};