import './style.css';
import { loadProjects, addProject, addTask, loadTasks, loadPriority } from './DOM_manipulation.js';

loadProjects();

const addProjectBtn = document.querySelector('#add-project');
const important = document.querySelector('#important');

addProjectBtn.addEventListener('click', function() {
    addProject();
});

important.addEventListener('click', function() {
    loadPriority();
    document.querySelectorAll('.menus button, .projects .project').forEach(el => {
        el.classList.remove('active');
    });
    important.classList.add('active');
    const taskTitleElement = document.querySelector('.main-header h2');
    taskTitleElement.textContent = important.textContent;

    let addTask = document.querySelector('#add-task');
    addTask.style.display = 'none';
});

addTask();

