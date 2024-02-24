import { loadProjectsStorage, addProjectStorage, addTaskToProject} from "./backend.js";

//for projects

function loadProjects() {
    const projects = loadProjectsStorage();

    projects.forEach(project => {
        let projectList = document.querySelector('.projects-list');
        let projectElement = document.createElement('div');
        let p = document.createElement('p');
        let settings = document.createElement('button');
        let setting_modal = document.createElement('div');
        let modal_menu = document.createElement('div');
        let edit = document.createElement('button');
        let del = document.createElement('button');

        p.innerHTML = '<i class="fa-solid fa-bars"></i>' + project.name;

        settings.classList.add('settings');
        settings.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

        edit.innerHTML = 'Edit';
        edit.classList.add('edit');

        del.innerHTML = 'Delete';
        del.classList.add('delete');

        setting_modal.classList.add('setting-modal');
        modal_menu.classList.add('modal-menu');

        modal_menu.appendChild(edit);
        modal_menu.appendChild(del);

        setting_modal.appendChild(modal_menu);

        projectElement.classList.add('project');
        projectElement.appendChild(p);
        projectElement.appendChild(settings);

        projectList.appendChild(setting_modal);
        projectList.appendChild(projectElement);

        addSettings(edit, del, setting_modal, settings, p, projectElement);
        setActiveDOM(project, projectElement, p);
    });
}

function addProject() {
    let projectList = document.querySelector('.projects-list');
    let project = document.createElement('div');
    let p = document.createElement('p');
    let textField = document.createElement('input');
    let settings = document.createElement('button');
    let btn_container = document.createElement('div');
    let add = document.createElement('button');
    let cancel = document.createElement('button');
    let setting_modal = document.createElement('div');
    let modal_menu = document.createElement('div');
    let edit = document.createElement('button');
    let del = document.createElement('button');

    p.innerHTML = '<i class="fa-solid fa-bars"></i>';

    textField.type = 'text';
    textField.placeholder = 'Project Name';
    textField.classList.add('project-name');

    settings.classList.add('settings');
    settings.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    btn_container.classList.add('btn-container');

    add.innerHTML = 'Add';
    add.classList.add('add');

    cancel.innerHTML = 'Cancel';
    cancel.classList.add('cancel');

    btn_container.appendChild(add);
    btn_container.appendChild(cancel);

    edit.innerHTML = 'Edit';
    edit.classList.add('edit');

    del.innerHTML = 'Delete';
    del.classList.add('delete');

    setting_modal.classList.add('setting-modal');
    modal_menu.classList.add('modal-menu');

    modal_menu.appendChild(edit);
    modal_menu.appendChild(del);

    setting_modal.appendChild(modal_menu);

    project.classList.add('project');
    project.appendChild(p);
    project.appendChild(textField);
    project.appendChild(settings);
    project.appendChild(btn_container);

    projectList.appendChild(setting_modal);
    projectList.appendChild(project);

    projectAddConfirmation(add, cancel, p, project, textField, btn_container);
    addSettings(edit, del, setting_modal, settings, p, project);


}

function projectAddConfirmation(add, cancel, p, project, textField, btn_container) {
    add.addEventListener('click', function() {
        let newProject = addProjectStorage(textField);
        p.innerHTML += newProject.name;
        textField.remove();
        btn_container.remove();

        setActiveDOM(newProject, project, p);
    });

    cancel.addEventListener('click', function() {
        project.remove();
    });
}

function addSettings(edit, del, setting_modal, settings, p, project) {
    const projectName = p.textContent;

    settings.addEventListener('click', function() {
        if (setting_modal.style.display === 'flex') {
            setting_modal.style.display = 'none';
        } else {
            setting_modal.style.display = 'flex';
        }
    });

    edit.addEventListener('click', function() {
        let confirm = document.createElement('button');
        let cancel = document.createElement('button');
        let btn_container = document.createElement('div');

        confirm.classList.add('add');
        confirm.innerHTML = 'Confirm';

        cancel.classList.add('cancel');
        cancel.innerHTML = 'Cancel';

        btn_container.classList.add('btn-container');

        let textField = document.createElement('input');
        textField.value = p.textContent;
        textField.classList.add('project-name');

        p.innerHTML = '<i class="fa-solid fa-bars"></i>';

        p.appendChild(textField);

        btn_container.appendChild(confirm);
        btn_container.appendChild(cancel);

        project.appendChild(btn_container);

        setting_modal.style.display = 'none';

        confirm.addEventListener('click', function() {
            const projects = JSON.parse(localStorage.getItem('projects')) || [];
            console.log(projects);

            const projectIndex = projects.findIndex(p1 => p1.name === projectName);
            console.log(projectIndex);

            if (projectIndex !== -1) {
                projects[projectIndex].name = textField.value;
                localStorage.setItem('projects', JSON.stringify(projects));
            }

            let newProject_name = textField.value;
            p.removeChild(textField);
            p.innerHTML += newProject_name;
            btn_container.remove();
        });

        cancel.addEventListener('click', function() {
            p.removeChild(textField);
            p.innerHTML += textField.value;
            btn_container.remove();
        });

    });

    del.addEventListener('click', function() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        console.log(p.textContent);

        const projectIndex = projects.findIndex(p1 => p1.name === p.textContent);
        console.log(projectIndex);

        if (projectIndex !== -1) {
            projects.splice(projectIndex,  1);

            localStorage.setItem('projects', JSON.stringify(projects));
        }

        project.remove();
        setting_modal.style.display = 'none';

    });
}


function setActiveDOM(project, projectElement, p) {

    projectElement.addEventListener('click', function() {
        let projects = loadProjectsStorage();

        document.querySelectorAll('.menus button, .projects .project').forEach(el => {
            el.classList.remove('active');
        });
    
        const taskTitleElement = document.querySelector('.main-header h2');
        projectElement.classList.add('active');
        taskTitleElement.textContent = p.textContent;

        let addTask = document.querySelector('#add-task');
        addTask.style.display = 'flex';

        projects.forEach(pr => {
            if (pr.name === project.name) {
                pr.active = true;
            } else {
                pr.active = false;
            }
        });
        
        localStorage.setItem('projects', JSON.stringify(projects));
        loadTasks();
    });
}

// for tasks

function createTaskElement(task) {
    const addTaskModal = document.querySelector('#add-task-modal');
            let taskElement = document.createElement('div');
            let checkbox = document.createElement('div');
            let taskHeader = document.createElement('div');
            let taskContent = document.createElement('div');
            
            let checkboxInput = document.createElement('input');
            let taskTitle = document.createElement('div');
            let taskDetails = document.createElement('div');
            let taskTitleText = document.createElement('h3');
            let task_date = document.createElement('p');
            let star = document.createElement('img');
            let setting = document.createElement('i');

            taskElement.classList.add('task');
            checkbox.classList.add('checkbox');
            taskHeader.classList.add('task-header');
            taskContent.classList.add('task-content');

            taskTitle.classList.add('task-title');
            taskDetails.classList.add('task-details');

            checkboxInput.type = 'checkbox';

            if (task.priority === true)
            {
                star.src = '../src/images/star.png';
            }
            else
            {
                star.src = '../src/images/black-star.png';
            }

            setting.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

            checkbox.appendChild(checkboxInput);

            taskTitleText.textContent = task.title;
            taskTitle.appendChild(taskTitleText);

            task_date.textContent = task.date;
            taskDetails.appendChild(task_date);
            taskDetails.appendChild(star);
            taskDetails.appendChild(setting);
            
            taskHeader.appendChild(taskTitle);
            taskHeader.appendChild(taskDetails);

            taskContent.textContent = task.content;
            
            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskHeader);
            taskElement.appendChild(taskContent);

            addTaskModal.parentNode.insertBefore(taskElement, addTaskModal);
            taskFinished(task.title, checkboxInput, taskElement);
            addPriority(task.title, star);
            addDelete(task.title, setting, taskElement);
}


function clearTasks() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.remove();
    });
}


function loadTasks() {
    clearTasks();
    const projects = loadProjectsStorage();
    const activeProject = projects.find(project => project.active);
    const tasks = activeProject.tasks;

    console.log(projects); 

    tasks.forEach(task => {

        const addTaskModal = document.querySelector('#add-task-modal');
        let taskElement = document.createElement('div');
        let checkbox = document.createElement('div');
        let taskHeader = document.createElement('div');
        let taskContent = document.createElement('div');
        
        let checkboxInput = document.createElement('input');
        let taskTitle = document.createElement('div');
        let taskDetails = document.createElement('div');
        let taskTitleText = document.createElement('h3');
        let task_date = document.createElement('p');
        let star = document.createElement('img');
        let setting = document.createElement('i');

        taskElement.classList.add('task');
        checkbox.classList.add('checkbox');
        taskHeader.classList.add('task-header');
        taskContent.classList.add('task-content');

        taskTitle.classList.add('task-title');
        taskDetails.classList.add('task-details');

        checkboxInput.type = 'checkbox';

        if (task.priority === true)
        {
            star.src = '../src/images/star.png';
        }
        else
        {
            star.src = '../src/images/black-star.png';
        }

        setting.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        checkbox.appendChild(checkboxInput);

        taskTitleText.textContent = task.title;
        taskTitle.appendChild(taskTitleText);

        task_date.textContent = task.date;
        taskDetails.appendChild(task_date);
        taskDetails.appendChild(star);
        taskDetails.appendChild(setting);
        
        taskHeader.appendChild(taskTitle);
        taskHeader.appendChild(taskDetails);

        taskContent.textContent = task.content;
        
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskHeader);
        taskElement.appendChild(taskContent);

        addTaskModal.parentNode.insertBefore(taskElement, addTaskModal);
        taskFinished(task.title, checkboxInput, taskElement);
        addPriority(task.title, star);
        addDelete(task.title, setting, taskElement); 
    });
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

        addTaskToProject(title.value, content.value, date.value);
        resetModal(title, content, date, addTaskModal);
        taskFinished(title.value, checkboxInput, taskElement);
        addPriority(title.value, star);
        addDelete(title.value, setting);
    });

    cancel.addEventListener('click', function() {
        console.log('Cancel');
        resetModal(title, content, date, addTaskModal);
    });
}


function resetModal(title, content, date, addTaskModal) {
    title.value = '';
    content.value = '';
    date.value = '';
    addTaskModal.style.display = 'none';

}


function addDelete(title, setting, taskElement) {
    setting.addEventListener('click', function() {
        let projects = loadProjectsStorage();
        let activeProject = projects.find((project) => project.active === true);
        let tasks = activeProject.tasks;
        const taskIndex = tasks.findIndex(task => task.title === title);


        console.log(taskElement);
        if (taskElement) {
            taskElement.style.textDecoration = 'line-through'; 
        }

        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    });

}


function taskFinished(title, checkboxInput, taskElement) {
    checkboxInput.addEventListener('change', function() {
        let projects = loadProjectsStorage();
        let activeProject = projects.find((project) => project.active === true);
        let tasks = activeProject.tasks;
        const taskIndex = tasks.findIndex(task => task.title === title);

        if (checkboxInput.checked) {
            taskElement.style.textDecoration = 'line-through';
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                localStorage.setItem('projects', JSON.stringify(projects));
            }
        }
    });
}


function addPriority(title, star) {
    star.addEventListener('click', function() {
        let projects = loadProjectsStorage();
        let activeProject = projects.find((project) => project.active === true);
        let tasks = activeProject.tasks;
        let task = tasks.find((task) => task.title === title);
        console.log(star.src)

        if (star.src === 'http://127.0.0.1:5500/todo/src/images/black-star.png')
        {
            console.log('Priority');
            task.priority = true;
            star.src = '../src/images/star.png'
        }
        else
        {
            console.log('Not Priority');
            task.priority = false;
            star.src = '../src/images/black-star.png'
        }

        localStorage.setItem('projects', JSON.stringify(projects));
    });
}


function loadAllTasks() {
    clearTasks();
    const projects = loadProjectsStorage();
    
    projects.forEach(project => {
        project.tasks.forEach(task => {
            createTaskElement(task);
        });  
    });
}

function loadToday() {
    clearTasks();
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const activeProject = projects.find((project) => project.active === true);

    const today = new Date();
    const tasks = activeProject.tasks;

    tasks.forEach(task => {
        let task_date = new Date(task.date);
        if (task_date.getDate() === today.getDate() && task_date.getMonth() === today.getMonth() && task_date.getFullYear() === today.getFullYear())
        {
            createTaskElement(task);
            console.log(task_date.getDate());
        }
    });
}

function loadPriority() {
    clearTasks();
    const projects = loadProjectsStorage();

    projects.forEach(project => {
        project.tasks.forEach(task => {
            if (task.priority === true)
            {
                createTaskElement(task);
            }
        });
    });
}


export { loadProjects, addProject, addTask, loadTasks, loadPriority, loadAllTasks, loadToday};