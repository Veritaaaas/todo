
function loadProjectsStorage() {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    return projects;
}

function addProjectStorage(textField) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const newProject = {
            name: textField.value,
            tasks: [],
            active: false,
        };
        projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projects));

        return newProject;
}


function loadTasksStorage() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const activeProject = projects.find((project) => project.active === true);
    return activeProject.tasks;
}


function addTaskToProject(title, content, date) {
    let projects = loadProjectsStorage();
    let activeProject = projects.find((project) => project.active === true);

    const newTask = {
        title,
        content,
        date,
        done: false,
        priority: false
    };
    activeProject.tasks.push(newTask);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export { loadProjectsStorage, addProjectStorage, addTaskToProject, loadTasksStorage };

    
