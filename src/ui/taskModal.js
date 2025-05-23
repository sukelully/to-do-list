import { updateDateInput } from "../date.js";
import { resetDropdownContent } from "./dropdown.js";
import { Task } from "../models.js";
import { displayProjects } from "./projectElement.js";
import { populateProjects } from "./dropdown.js";
import { openModal } from "../utils.js";

const showDeleteTaskModal = (task, project, projectsArray) => {
    const deleteTasksModal = document.getElementById("delete-task-modal");
    openModal(deleteTasksModal.id);

    const deleteTaskSpan = document.getElementById("delete-task-span");
    deleteTaskSpan.textContent = `${task.task}`;

    const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
    cancelDeleteBtn.addEventListener("click", () => {
        deleteTasksModal.classList.add("invisible");
    });

    const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
    confirmDeleteBtn.addEventListener("click", () => {
        removeTask(task.id, project, projectsArray);
        deleteTasksModal.classList.add("invisible");
    });
};

// Remove specified task from tasksArray
const removeTask = (id, project, projectsArray) => {
    const taskIndex = project.tasksArray.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        project.tasksArray.splice(taskIndex, 1);
    }
    // displayTasks(project);
    displayProjects(projectsArray)
};

const clearTaskInput = () => {
    const dateInput = document.getElementById("date-input");
    const taskInput = document.getElementById("task-name-input");
    const descInput = document.getElementById("task-description-input");
    const dropdownBtn = document.getElementById("priority-dropdown-btn");
    const selectDropdown = document.getElementById("priority");

    dateInput.value = "";
    taskInput.value = "";
    descInput.value = "";
    priority.value = null;
    updateDateInput(dateInput);
    dropdownBtn.innerHTML = resetDropdownContent("Priority");
};

const initTaskForm = (projectsArray) => {
    const form = document.getElementById("add-task-form");
    populateProjects(projectsArray);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
            console.log(`${key}, ${value}`);
        });

        for (const project of projectsArray) {
            if (project.name === task.project) {
                project.tasksArray.push(new Task(task.name, task.description, new Date(task.date), parseInt(task.priority)));
            }
        }

        displayProjects(projectsArray);

        document.getElementById("add-task-modal").classList.toggle("invisible");
    });
}

export { showDeleteTaskModal, clearTaskInput, initTaskForm }