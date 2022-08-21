const tasks = [];
let numberOfLocalTasks = 0;

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

    console.table(task);

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

// window.onload = localStorage.clear();
window.onload = addLocalStorageToTasks();

export { pushTasks, 
    getIDByTasksLength, 
    spliceTasks, 
    getTasks, 
    getNumberOfLocalTasks, 
    saveToLocalStorage };