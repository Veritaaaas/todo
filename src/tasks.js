function resetModal(title, content, date, addTaskModal) {
    title.value = '';
    content.value = '';
    date.value = '';
    addTaskModal.style.display = 'none';

}

function addTask() {
    const addTask = document.querySelector('#add-task');
    const addTaskModal = document.querySelector('#add-task-modal');
    let title = document.querySelector('#title-task');
    let content = document.querySelector('#content-task');
    let date = document.querySelector('#date-task');
    let add = document.querySelector('#add-task-btn');
    let cancel = document.querySelector('#cancel-task-btn');

    let task = document.createElement('div');
    let checkbox = document.createElement('div');
    let taskHeader = document.createElement('div');
    let taskContent = document.createElement('div');

    task.classList.add('task');
    checkbox.classList.add('checkbox');
    taskHeader.classList.add('task-header');
    taskContent.classList.add('task-content');

    let checkboxInput = document.createElement('input');
    let taskTitle = document.createElement('div');
    let taskDetails = document.createElement('div');
    let taskTitleText = document.createElement('h3');
    let task_date = document.createElement('p');
    let star = document.createElement('img');
    let setting = document.createElement('i');

    taskTitle.classList.add('task-title');
    taskDetails.classList.add('task-details');

    checkboxInput.type = 'checkbox';
    star.src = '../src/images/black-star.png';
    setting.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    addTask.addEventListener('click', function() {
        console.log('Add Task');
        addTaskModal.style.display = 'flex';
    });

    add.addEventListener('click', function() {
        console.log('Add');

        checkbox.appendChild(checkboxInput);

        taskTitleText.textContent = title.value;
        taskTitle.appendChild(taskTitleText);

        task_date.textContent = date.value;
        taskDetails.appendChild(task_date);
        taskDetails.appendChild(star);
        taskDetails.appendChild(setting);
        
        taskHeader.appendChild(taskTitle);
        taskHeader.appendChild(taskDetails);

        taskContent.textContent = content.value;
        
        task.appendChild(checkbox);
        task.appendChild(taskHeader);
        task.appendChild(taskContent);

        addTaskModal.parentNode.insertBefore(task, addTaskModal);
        resetModal(title, content, date, addTaskModal);
    });

    cancel.addEventListener('click', function() {
        console.log('Cancel');
        resetModal(title, content, date, addTaskModal);
    });
}

function addTaskStorage(title, content, date) {
    if (activeProject) {

    }
}
