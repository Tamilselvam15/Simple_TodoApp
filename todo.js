document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.querySelector('.display1');
    const addButton = document.querySelector('.display2');
    const taskContainer = document.querySelector('.part2');

    // Function to add a new task
    const addTask = () => {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');

            const check = document.createElement('input');
            check.type = 'checkbox'
            check.classList.add('checking');

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            taskContent.classList.add('task-content');

            const editButton = document.createElement('button');
            editButton.innerHTML = '<img src="todoimage/edit.png" alt="Edit" style="height: 20px; width: 20px;" />';
            editButton.classList.add('edit-button');

            // Function to update the task content
            const updateTask = (inputElement, taskContent, editButton) => {
                taskContent.textContent = inputElement.value.trim() || taskContent.textContent;
                editButton.innerHTML = '<img src="todoimage/edit.png" alt="Edit" style="height: 20px; width: 20px;" />';
                taskItem.replaceChild(taskContent, inputElement);
            };

            



            // Event listener for edit button
            editButton.addEventListener('click', () => {
                // Create an input element with the current task text
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.value = taskContent.textContent;
                inputElement.classList.add('task-input');

                // Replace the task content with the input element
                taskItem.replaceChild(inputElement, taskContent);

                // Focus the input element
                inputElement.focus();

                const onBlur = () => {
                    updateTask(inputElement, taskContent, editButton);
                    inputElement.removeEventListener('blur', onBlur);
                };

                // Save the edited task when the input field loses focus
                inputElement.addEventListener('blur', onBlur);

                // Handle Enter key press
                inputElement.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        updateTask(inputElement, taskContent, editButton);
                        inputElement.removeEventListener('blur', onBlur);
                    }
                });
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<img src="todoimage/delete.jpeg" alt="Delete" style="height: 20px; width: 20px;" />';
            deleteButton.classList.add('delete-button');

            // Event listener for delete button
            deleteButton.addEventListener('click', () => {
                taskContainer.removeChild(taskItem);
            });

            taskItem.appendChild(check);
            taskItem.appendChild(taskContent);
            taskItem.appendChild(editButton);
            taskItem.appendChild(deleteButton);
            taskContainer.appendChild(taskItem);
            

            inputField.value = "";
        }
    };

    // Event listener for add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
