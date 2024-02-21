import './style.css';
import { projectAdd, projectAddConfirmation, addSettings} from './projects.js';

let addProject = document.querySelector('#add-project');


addProject.addEventListener('click', function() {
    let getProjectElements = projectAdd();
    projectAddConfirmation(getProjectElements);
    addSettings(getProjectElements);

});

