function addTask() {
    const addTask = document.querySelector('#add-task');
    const addTaskModal = document.querySelector('#add-task-modal');
    let title = document.querySelector('#task-title');
    let content = document.querySelector('#task-content');
    let date = document.querySelector('#task-date');

    addTask.addEventListener('click', function() {
        console.log('Add Task');
        
        addTaskModal.style.display = 'flex';
    });
}

export { addTask };