import { updateDateInput } from '../date';
import { resetDropdownContent } from './dropdown';
import { Task, Project } from '../models';
import { displayProjects } from './projectElement';
import { populateProjects } from './dropdown';
import { openModal, saveToLocalStorage, getRequiredElement } from '../utils';

const showDeleteTaskModal = (
  task: Task,
  project: Project,
  projectsArray: Project[]
) => {
  const deleteTasksModal =
    getRequiredElement<HTMLDivElement>('delete-task-modal');
  openModal(deleteTasksModal.id);

  const deleteTaskSpan =
    getRequiredElement<HTMLSpanElement>('delete-task-span');
  deleteTaskSpan.textContent = `${task.task}`;

  const cancelDeleteBtn =
    getRequiredElement<HTMLButtonElement>('cancel-delete-btn');
  cancelDeleteBtn.addEventListener('click', () => {
    deleteTasksModal.classList.add('invisible');
  });

  const confirmDeleteBtn =
    getRequiredElement<HTMLButtonElement>('confirm-delete-btn');
  confirmDeleteBtn.addEventListener('click', () => {
    removeTask(task.id, project, projectsArray);
    deleteTasksModal.classList.add('invisible');
  });
};

// Remove specified task from tasksArray
const removeTask = (id: string, project: Project, projectsArray: Project[]) => {
  const taskIndex = project.tasksArray.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    project.tasksArray.splice(taskIndex, 1);
  }
  // displayTasks(project);
  displayProjects(projectsArray);
  saveToLocalStorage(projectsArray);
};

const clearTaskInput = () => {
  const dateInput = getRequiredElement<HTMLInputElement>('date-input');
  const taskInput = getRequiredElement<HTMLInputElement>('task-name-input');
  const descInput = getRequiredElement<HTMLInputElement>(
    'task-description-input'
  );
  const dropdownBtn = getRequiredElement<HTMLButtonElement>(
    'priority-dropdown-btn'
  );
  // const selectDropdown = getRequiredElement<HTMLSelectElement>("priority");

  dateInput.value = '';
  taskInput.value = '';
  descInput.value = '';
  // priority.value = null;
  updateDateInput(dateInput);
  dropdownBtn.innerHTML = resetDropdownContent('Priority');
};

const initTaskForm = (projectsArray: Project[]) => {
  type TaskFormData = {
    name: string;
    description: string;
    date: string;
    priority: string;
    project: string;
  };

  const form = getRequiredElement<HTMLFormElement>('add-task-form');
  populateProjects(projectsArray);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const task = Object.fromEntries(formData.entries()) as TaskFormData;

    // Defensive: check all required fields exist
    if (
      task.name &&
      task.description &&
      task.date &&
      task.priority &&
      task.project
    ) {
      for (const project of projectsArray) {
        if (project.name === task.project) {
          project.tasksArray.push(
            new Task(
              task.name,
              task.description,
              new Date(task.date),
              parseInt(task.priority)
            )
          );
        }
      }

      displayProjects(projectsArray);
      saveToLocalStorage(projectsArray);
      getRequiredElement<HTMLDivElement>('add-task-modal').classList.toggle('invisible');
    } else {
      console.error('Missing form fields:', task);
    }
  });
};

export { showDeleteTaskModal, clearTaskInput, initTaskForm };
