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

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
          <div class="card-body">
            <p>${title} - ${description}
            <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
            </p>
          </div>
        </div>`;
    }
}