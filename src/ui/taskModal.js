import { displayTasks } from "./taskElement.js";
import { updateDateInput } from "../date.js";
import { resetDropdownContent } from "./dropdown.js";

const showDeleteTaskModal = (task, tasksArray) => {
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
        removeTask(task.id, tasksArray);
        deleteTasksModal.classList.add("invisible");
    });
};

// Remove specified task from tasksArray
const removeTask = (id, tasksArray) => {
    const taskIndex = tasksArray.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasksArray.splice(taskIndex, 1);
    }
    displayTasks(tasksArray);
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