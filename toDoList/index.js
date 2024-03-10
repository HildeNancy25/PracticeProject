let toDoList = [];

function addTask() {
    let toDoInput = document.getElementById('toDoInput');
    let taskText = toDoInput.value.trim();

    if (taskText === '') {
        alert('enter a valid task.');
        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    toDoList.push(task);
    rendertoDoList();
    toDoInput.value = '';
}

function completingTask(index) {
    toDoList[index].completed = !toDoList[index].completed;
    rendertoDoList();
}

function deleteTask(index) {
    toDoList.splice(index, 1);
    rendertoDoList();
}

function rendertoDoList() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    toDoList.forEach(function(task, index) {
        let taskItem = document.createElement('li');
        taskItem.textContent = task.text;

        taskItem.onclick = function() {
            completingTask(index);
        };

        if (task.completed) {
            taskItem.classList.add('completed');
        }

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.onclick = function(event) {
            event.stopPropagation();
            deleteTask(index);
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}
