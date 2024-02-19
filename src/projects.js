function projectAdd() {
    let projectList = document.querySelector('.projects-list');
    let project = document.createElement('div');
    let p = document.createElement('p');
    let textField = document.createElement('input');
    let settings = document.createElement('button');
    let btn_container = document.createElement('div');
    let add = document.createElement('button');
    let cancel = document.createElement('button');

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

    project.classList.add('project');
    project.appendChild(p);
    project.appendChild(textField);
    project.appendChild(settings);
    project.appendChild(btn_container);

    projectList.appendChild(project);

    return function() {
        return {p, textField, btn_container};
    };
    
}

function projectAddConfirmation(getProjectElements) {

    let add = document.querySelector('.add');
    let cancel = document.querySelector('.cancel');

    add.addEventListener('click', function() {
        let {p, textField, btn_container} = getProjectElements();

        console.log(textField.value);
        p.innerHTML += textField.value;

        textField.remove();
        btn_container.remove();

        console.log('Project Added');
    });

    cancel.addEventListener('click', function() {
        let project = document.querySelector('.project');
        project.remove();
    });
}


export { projectAdd, projectAddConfirmation };