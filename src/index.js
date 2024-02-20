import './style.css';
import { projectAdd, projectAddConfirmation, addSettings} from './projects.js';

let addProject = document.querySelector('#add-project');
let settings = document.querySelectorAll('.settings');


addProject.addEventListener('click', function() {
    let getProjectElements = projectAdd();
    projectAddConfirmation(getProjectElements);
    addSettings(getProjectElements);
});

