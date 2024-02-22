import './style.css';
import { loadProjects, addProject, addTask, loadTasks } from './DOM_manipulation.js';

loadProjects();

const addProjectBtn = document.querySelector('#add-project');
const add_task = document.querySelector('#add-task');

addProjectBtn.addEventListener('click', function() {
    addProject();
});

addTask();
