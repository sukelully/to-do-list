import { displayTasks } from "./taskElement.js";
import { updateDateInput } from "../date.js";
import { resetDropdownContent } from "./dropdown.js";

const showDeleteTaskModal = (task, project) => {
    const deleteTasksModal = document.getElementById("delete-task-modal");
    deleteTasksModal.classList.remove("invisible");

    const deleteTaskSpan = document.getElementById("delete-task-span");
    deleteTaskSpan.textContent = `${task.task}`;

    const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
    cancelDeleteBtn.addEventListener("click", () => {
        console.log("test");
        deleteTasksModal.classList.add("invisible");
    });

    const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
    confirmDeleteBtn.addEventListener("click", () => {
        removeTask(task.id, project);
        deleteTasksModal.classList.add("invisible");
    });
};

// Remove specified task from tasksArray
const removeTask = (id, project) => {
    const taskIndex = project.tasksArray.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        project.tasksArray.splice(taskIndex, 1);
    }
    displayTasks(project);
};

const clearTaskInput = () => {
    const dateInput = document.getElementById("date-input");
    const taskInput = document.getElementById("task-name-input");
    const descInput = document.getElementById("task-description-input");
    const dropdownBtn = document.getElementById("dropdown-btn");

    dateInput.value = "";
    taskInput.value = "";
    descInput.value = "";
    updateDateInput(dateInput);
    dropdownBtn.innerHTML = resetDropdownContent();
};

export { showDeleteTaskModal, clearTaskInput }