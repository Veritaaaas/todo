import './style.css';
import { loadProjects, addProject, addTask, loadPriority, loadAllTasks, loadToday } from './DOM_manipulation.js';

loadProjects();

const addProjectBtn = document.querySelector('#add-project');
const all = document.querySelector('#all');
const today = document.querySelector('#today');
const important = document.querySelector('#important');

addProjectBtn.addEventListener('click', function() {
    addProject();
});

all.addEventListener('click', function() {
    loadAllTasks();
    document.querySelectorAll('.menus button, .projects .project').forEach(el => {
        el.classList.remove('active');
    });

    all.classList.add('active');
    const taskTitleElement = document.querySelector('.main-header h2');
    taskTitleElement.textContent = all.textContent;

    let addTask = document.querySelector('#add-task');
    addTask.style.display = 'none';

});

today.addEventListener('click', function() {
    loadToday();
    document.querySelectorAll('.menus button, .projects .project').forEach(el => {
        el.classList.remove('active');
    });
    today.classList.add('active');
    const taskTitleElement = document.querySelector('.main-header h2');
    taskTitleElement.textContent = today.textContent;

    let addTask = document.querySelector('#add-task');
    addTask.style.display = 'none';
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

