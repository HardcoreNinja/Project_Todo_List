const tasks = []

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

window.onload = addLocalStorageToTasks();

export { pushTasks };