document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    //console.log(description)

    let task = {
        // title: title,
        // description: escription
        title,
        description
    };
    /*Compara !si tiene tareas agrega una
          Tiene tareas, agrega a una lista ya existente*/
    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));
        storedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // getTasks(); storedTasks
    // document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {}