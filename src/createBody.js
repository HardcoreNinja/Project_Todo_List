import { pushTasks } from "./inboxLogic.js";

const task = {
    title: "",
    task: "",
    date: ""
}
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
    taskContainer.setAttribute("id", i + "TC");

    taskContainer.innerHTML = "Title: " + stringArray[0] + '<br>' + '<br>' +
        "Task: " + stringArray[1] + '<br>' + '<br>' +
        "Due Date: " + stringArray[2];

    taskContainer.append(createButton("delete_forever", "Delete", deleteTask, i), createDividerLine());

    getBody().append(taskContainer);
}

function loadTasksFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++)
        appendTasksFromLocalStorage(i, localStorage.getItem(i))

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
        createButton("check", "Create Task", closeModal, "closeModalButton")
    );
    modal.appendChild(modalContent);
    getContent().append(modal);
}

const createButton = (icon, text, funct, id) => {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.append(addIcon(icon));
    button.append(text);
    button.addEventListener("mousedown", funct);
    button.classList.add("button")
    return button;
}

function clearTC(id) {
    const taskContainer = document.getElementById(id);

    while (taskContainer.firstChild)
        taskContainer.removeChild(taskContainer.firstChild);
}

function deleteTask() {
    // alert(this.id)
    document.getElementById(this.id + "TC").remove();
}

const createDividerLine = () => {
    const dividerLine = document.createElement("hr");
    return dividerLine;
}

function appendSavedTask(id, task) {
    const taskContainer = document.getElementById(id);
    taskContainer.innerHTML = "Title: " + task.title + '<br>' + '<br>' +
        "Task: " + task.task + '<br>' + '<br>' +
        "Due Date: " + task.date;

    taskContainer.append(createButton("delete_forever", "Delete", deleteTask, task.title), createDividerLine());
}

function save() {
    const newTask = Object.create(task);

    newTask.title = document.getElementById(this.id + "Label").textContent;
    newTask.task = document.getElementById(this.id + "Task").value;
    newTask.date = document.getElementById(this.id + "Date").value;

    pushTasks(newTask);
    clearTC(this.id + "TC");
    appendSavedTask(this.id + "TC", newTask);
}

function addTask() {
    // alert("Add Task!");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", taskName + "TC");
    taskContainer.classList.add("taskContainer");
    const form = document.createElement("form");
    form.append(createInputContainer(createLabel(taskName + "Label"), createInput("text", taskName + "Task", false, null, null), createInput("date", taskName + "Date", false, null, null), createButton("save", "Save", save, taskName)));
    taskContainer.append(form);
    getBody().append(taskContainer);
}



const createBodyObject = () => {
    if (sectionId === "Inbox") {
        const inboxContainer = document.createElement("div");
        inboxContainer.classList.add("inboxContainer");
        inboxContainer.append(createButton("add", "Add Task", createTaskModal, "addTaskButton"));
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

window.onload = loadTasksFromLocalStorage();

export { receiverFunction };