function projectAdd() {
    let projectList = document.querySelector('.projects-list');
    let project = document.createElement('div');
    let p = document.createElement('p');
    let textField = document.createElement('input');
    let settings = document.createElement('button');
    let add = document.createElement('button');
    let cancel = document.createElement('button');

    p.innerHTML = '<i class="fa-solid fa-bars"></i>';

    textField.type = 'text';
    textField.placeholder = 'Project Name';
    textField.classList.add('project-name');

    settings.classList.add('settings');
    settings.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    project.classList.add('project');
    project.appendChild(p);
    project.appendChild(textField);
    project.appendChild(settings);

    projectList.appendChild(project);

    console.log('projectAdd')
}

export default projectAdd;