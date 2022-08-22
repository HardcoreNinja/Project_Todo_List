import {
    createButton,
    createDividerLine,
    appendTasksFromLocalStorage,
    getBody,
    sectionId
} from "./createBody.js";

const tasks = [];
let numberOfLocalTasks = 0;

const task = {
    title: "",
    task: "",
    date: ""
}

const getIDByTasksLength = () => {
    return tasks.length - 1;
}

function addLocalStorageToTasks() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const stringArray = localStorage.getItem(i).split(",");

            const tempTask = {
                title: "",
                task: "",
                date: ""
            }

            tempTask.title = stringArray[0];
            tempTask.task = stringArray[1];
            tempTask.date = stringArray[2];

            tasks.push(tempTask);
        }
        numberOfLocalTasks = tasks.length;
    }

}

function saveToLocalStorage() {
    localStorage.clear();

    for (let i = 0; i < tasks.length; i++)
        localStorage.setItem(i, tasks[i].title + "," + tasks[i].task + "," + tasks[i].date);

}

function pushTasks(task) {
    tasks.push(task);

    // console.table(task);

    saveToLocalStorage();
}

function spliceTasks(id) {
    tasks.splice(id, 1);
}

const getTasks = () => {
    return tasks;
}

const getNumberOfLocalTasks = () => {
    return numberOfLocalTasks;
}

function appendSavedTask(id, task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("savedTaskContainer");
    taskContainer.setAttribute("id", id + "TC");
    taskContainer.innerHTML = "Title: " + task.title + '<br>' + '<br>' +
        "Task: " + task.task + '<br>' + '<br>' +
        "Due Date: " + task.date;

    taskContainer.append(createButton("delete_forever", "Delete", deleteTask, id + "Delete", false), createDividerLine());
    getBody().append(taskContainer);
}

function save() {
    const form = document.getElementById(this.id + "Form");

    if (form.reportValidity()) {
        // alert(form.reportValidity());
        const newTask = Object.create(task);

        newTask.title = document.getElementById(this.id + "Label").textContent;
        newTask.task = document.getElementById(this.id + "Task").value;
        newTask.date = document.getElementById(this.id + "Date").value;

        pushTasks(newTask);
        deleteTC(this.id + "TC");
        appendSavedTask(getIDByTasksLength(), newTask);
    }
}

function deleteTC(id) {
    document.getElementById(id).remove();
}

function resetIDs() {
    const taskContainers = document.getElementsByClassName("savedTaskContainer");

    for (let i = getNumberOfLocalTasks(); i < getTasks().length; i++) 
        taskContainers[i].setAttribute("id", i + "TC");
    
    saveToLocalStorage();
}

function deleteTask() {
    const stringArray = this.id.split("D");
    document.getElementById(stringArray[0] + "TC").remove();
    spliceTasks(stringArray[0]);
    resetIDs();
}

const checkTodayTask = (localStorageString) => {
    const stringArray = localStorageString.split(",");
    const dateArray = stringArray[2].split("-");

    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    if (parseInt(dateArray[0]) === parseInt(year) &&
        parseInt(dateArray[1] - 1) === parseInt(month) &&
        parseInt(dateArray[2]) === parseInt(day)
    )
        return true;
    else
        return false;
}

const checkWeekTask = (localStorageString) => {
    const stringArray = localStorageString.split(",");
    const dateArray = stringArray[2].split("-");

    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    if (parseInt(dateArray[0]) === parseInt(year) &&
        parseInt(dateArray[1] - 1) === parseInt(month) &&
        parseInt(dateArray[2]) <= parseInt(day + 6))
        return true;
    else
        return false;
}

function loadTasksFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        if (sectionId === "Inbox")
            appendTasksFromLocalStorage(i, localStorage.getItem(i))
        else if (sectionId === "Today") {

            if (checkTodayTask(localStorage.getItem(i)))
                appendTasksFromLocalStorage(i, localStorage.getItem(i));
        }
        else if (sectionId === "This Week") {
            if (checkWeekTask(localStorage.getItem(i)))
                appendTasksFromLocalStorage(i, localStorage.getItem(i));
        }
    }
}

// window.onload = localStorage.clear();
window.onload = addLocalStorageToTasks();

export {
    save,
    deleteTask,
    loadTasksFromLocalStorage
};