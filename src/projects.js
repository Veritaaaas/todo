function setActive(element) {
    document.querySelectorAll('.menus button, .projects .project').forEach(el => {
        el.classList.remove('active');
    });
    element.classList.add('active');
}

function saveProjectsToStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function projectAdd() {
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

    project.addEventListener('click', function() {
        const taskTitleElement = document.querySelector('.main-header h2');
        setActive(project);

        activeProject = project;
        taskTitleElement.textContent = p.textContent;
        let addTask = document.querySelector('#add-task');
        addTask.style.display = 'flex';
    });

    projectList.appendChild(setting_modal);
    projectList.appendChild(project);

    projectAddConfirmation(add, cancel, p, project, textField, btn_container);
    addSettings(edit, del, setting_modal, settings, p, project);
}

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

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
        
        projectElement.addEventListener('click', function() {
            const taskTitleElement = document.querySelector('.main-header h2');
            setActive(projectElement);
    
            taskTitleElement.textContent = p.textContent;
            let addTask = document.querySelector('#add-task');
            addTask.style.display = 'flex';
        });
    });
}

function projectAddConfirmation(add, cancel, p, project, textField, btn_container) {
    add.addEventListener('click', function() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const newProject = {
            name: textField.value,
            tasks: [],
            active: false
        };
        projects.push(newProject);
        saveProjectsToStorage(projects);

        p.innerHTML += newProject.name;
        textField.remove();
        btn_container.remove();
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

export { projectAdd, projectAddConfirmation, addSettings, setActive, loadProjects };
