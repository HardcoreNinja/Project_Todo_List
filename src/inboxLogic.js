const tasks = []

function pushTasks(task) {
    tasks.push(task);

    console.table(task);

}

export { pushTasks };