function setActive(element) {

    document.querySelectorAll('.menus button, .projects .project').forEach(el => {
        el.classList.remove('active');
    });

    element.classList.add('active');
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

        taskTitleElement.textContent = p.textContent;
        let addTask = document.querySelector('#add-task');
        addTask.style.display = 'flex';
    });

    projectList.appendChild(setting_modal);
    projectList.appendChild(project);

    return function() {
        return {edit, del, setting_modal, settings, add, cancel, p, project, textField, btn_container};
    };
    
}

function projectAddConfirmation(getProjectElements) {

    console.log("Project Add Confirmation")
    
    let {edit, del, setting_modal, settings, add, cancel, p, project, textField, btn_container} = getProjectElements();

    add.addEventListener('click', function() {

        console.log(textField.value);
        p.innerHTML += textField.value;

        textField.remove();
        btn_container.remove();

        console.log('Project Added');
    });

    cancel.addEventListener('click', function() {
        project.remove();
    });
}

function addSettings(getProjectElements){
    
    let {edit, del, setting_modal, settings, add, cancel, p, project, textField, btn_container} = getProjectElements();


    settings.addEventListener('click', function() {
        console.log('Settings Clicked');

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
            let textNode = document.createTextNode(textField.value);
            p.appendChild(textNode);
            p.removeChild(textField);
            btn_container.remove();
        });

        cancel.addEventListener('click', function() {
            let textNode = document.createTextNode(textField.value);
            p.appendChild(textNode);
            p.removeChild(textField); 
            btn_container.remove();
        });

    });

    del.addEventListener('click', function() {
        project.remove();
        setting_modal.style.display = 'none';
    });
}




export { projectAdd, projectAddConfirmation, addSettings, setActive};