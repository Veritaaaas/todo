import './style.css';
import projectAdd from './projects.js';

let addProject = document.querySelector('#add-project');

addProject.addEventListener('click', function() {
    projectAdd();
});
