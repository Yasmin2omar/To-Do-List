document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'list-group-item';
            taskItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="btn  btn-sm edit-task" style="color:#FDF0F0; font-size: 20px;background-color: #64CCC5;">Edit</button>
                <button class="btn  btn-sm delete-task" style="color:#FDF0F0 ;font-size: 20px;background-color: #C70039;">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            const deleteButton = taskItem.querySelector('.delete-task');
            const editButton = taskItem.querySelector('.edit-task');
            const taskTextElement = taskItem.querySelector('.task-text');

            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            editButton.addEventListener('click', function() {
                const updatedText = prompt('Edit task:', taskTextElement.textContent);
                if (updatedText !== null) {
                    taskTextElement.textContent = updatedText;
                }
            });
        }
    });
});
