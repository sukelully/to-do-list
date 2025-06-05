import { Project } from '../models';
import { populateProjects } from './dropdown';
import { displayProjects, removeProject } from './projectElement';
import { openModal, saveToLocalStorage, getRequiredElement } from '../utils';

const initAddProjectModal = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const addProjectBtn =
      getRequiredElement<HTMLButtonElement>('add-project-btn');
    const cancelAddProjectBtn = getRequiredElement<HTMLButtonElement>(
      'cancel-add-project-btn'
    );
    const addProjectModal =
      getRequiredElement<HTMLDivElement>('add-project-modal');

    addProjectBtn.addEventListener('click', () => {
      clearProjectInput();
      // addProjectModal.classList.toggle("invisible");
      openModal(addProjectModal.id);
    });

    cancelAddProjectBtn.addEventListener('click', () => {
      addProjectModal.classList.add('invisible');
    });
  });
};

const showDeleteProjectModal = (project: Project, projectsArray: Project[]) => {
  const deleteProjectModal = getRequiredElement<HTMLDivElement>(
    'delete-project-modal'
  );
  openModal(deleteProjectModal.id);

  const deleteProjectSpan = getRequiredElement<HTMLSpanElement>(
    'delete-project-span'
  );
  deleteProjectSpan.textContent = `${project.name}`;

  const cancelDeleteBtn = getRequiredElement<HTMLButtonElement>(
    'cancel-delete-project-btn'
  );
  const confirmDeleteBtn = getRequiredElement<HTMLButtonElement>(
    'confirm-delete-project-btn'
  );

  // Cleanup previous listeners (optional if you run into duplicates)
  const newCancelBtn = cancelDeleteBtn.cloneNode(true);
  cancelDeleteBtn.replaceWith(newCancelBtn);
  const newConfirmBtn = confirmDeleteBtn.cloneNode(true);
  confirmDeleteBtn.replaceWith(newConfirmBtn);

  newCancelBtn.addEventListener('click', () => {
    deleteProjectModal.classList.add('invisible');
  });

  newConfirmBtn.addEventListener('click', () => {
    removeProject(project.id, projectsArray);
    deleteProjectModal.classList.add('invisible');
  });
};

const clearProjectInput = () => {
  const projectNameInput =
    getRequiredElement<HTMLInputElement>('project-name-input');
  projectNameInput.value = '';
};

const initProjectForm = (projectsArray: Project[]) => {
  const form = getRequiredElement<HTMLFormElement>('add-project-form');
  const addProjectModal =
    getRequiredElement<HTMLDivElement>('add-project-modal');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('test');

    const formData = new FormData(e.target as HTMLFormElement);
    const projectName = formData.get('project-name');
    if (typeof projectName !== 'string') return;

    projectsArray.push(new Project(projectName));
    saveToLocalStorage(projectsArray);
    displayProjects(projectsArray);
    populateProjects(projectsArray);

    addProjectModal.classList.add('invisible');
  });
};

export { initAddProjectModal, initProjectForm, showDeleteProjectModal };
