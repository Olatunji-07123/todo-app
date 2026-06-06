// Get elements from HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

// Load tasks from browser storage when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task when button is clicked
addBtn.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object
    const task = {
        id: Date.now(), // Unique ID based on current time
        text: taskText,
        completed: false
    };

    // Add to list
    addTaskToList(task);

    // Save to browser storage
    saveTasks();

    // Clear input
    taskInput.value = '';
    taskInput.focus();

    // Update empty message
    updateEmptyMessage();
}

// Function to add task to the display
function addTaskToList(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('data-id', task.id);
    if (task.completed) {
        li.classList.add('completed');
    }

    li.innerHTML = `
        <input 
            type="checkbox" 
            class="task-checkbox" 
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})"
        >
        <span class="task-text">${task.text}</span>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(li);
}

// Function to toggle task completion
function toggleTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        refreshTaskList();
        updateEmptyMessage();
    }
}

// Function to delete a task
function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    refreshTaskList();
    updateEmptyMessage();
}

// Function to get all tasks from storage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Function to save tasks to browser storage
function saveTasks() {
    const tasks = Array.from(taskList.children).map(li => {
        const checkbox = li.querySelector('.task-checkbox');
        const text = li.querySelector('.task-text').textContent;
        const id = parseInt(li.getAttribute('data-id'));
        return {
            id: id,
            text: text,
            completed: checkbox.checked
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from storage
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => {
        addTaskToList(task);
    });
    updateEmptyMessage();
}

// Function to refresh task list
function refreshTaskList() {
    taskList.innerHTML = '';
    const tasks = getTasks();
    tasks.forEach(task => {
        addTaskToList(task);
    });
}

// Function to show/hide empty message
function updateEmptyMessage() {
    const tasks = getTasks();
    if (tasks.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}