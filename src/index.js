import './style.css';
import { projectAdd, projectAddConfirmation, addSettings, setActive} from './projects.js';
import { addTask } from './tasks.js';

let addProject = document.querySelector('#add-project');
const menus_btn = document.querySelectorAll('.menu-btn');
const taskTitleElement = document.querySelector('.main-header h2');

menus_btn[0].classList.add('active');

addProject.addEventListener('click', function() {
    let getProjectElements = projectAdd();
    projectAddConfirmation(getProjectElements);
    addSettings(getProjectElements);
});

menus_btn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        setActive(btn);
        taskTitleElement.textContent = btn.textContent;
    });
});

addTask();