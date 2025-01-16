document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Borrar</button>`;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, introduce una tarea.');
    }
});