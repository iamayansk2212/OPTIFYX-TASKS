let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="task">
                <span contenteditable="true" onblur="editTask(${index}, this.innerText)">${task}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>`;
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
        tasks.push(taskInput.value.trim());
        taskInput.value = '';
        updateStorage();
    }
}

function editTask(index, newText) {
    tasks[index] = newText.trim();
    updateStorage();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateStorage();
}

function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();
