import { formatDueDate, isPastDue, updateDateInput } from "../date.js";
import { getPriorityColor, resetDropdownContent } from "./dropdown.js";

// Create edit / delete btn for task elements
const createOptionsBtn = (iconString) => {
    const btn = document.createElement("button");
    btn.classList.add("ml-auto", "invisible", "group-hover:visible", "cursor-pointer");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", `${iconString}`);

    btn.appendChild(icon);

    return btn;
};

const createTaskElement = (task, tasksArray) => {
    const container = document.createElement("div");
    container.id = "task-container";
    container.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start", "shadow-xs", "hover:shadow-md", "duration-300", "hover:border-slate-400", "transition-all", "min-w-full", "group");

    const priorityIcon = document.createElement("i");
    priorityIcon.classList.add("fa-solid", "fa-circle", "py-2", getPriorityColor(task.priority));
    container.appendChild(priorityIcon);

    const list = document.createElement("ul");

    const taskFields = {
        task: ["font-normal"],
        description: ["text-slate-400", "text-sm"],
        dueDate: isPastDue(task.dueDate) ? ["text-red-400", "text-sm"] : ["text-slate-400", "text-sm"]
    };

    for (const [key, value] of Object.entries(task)) {
        if (!(key in taskFields)) continue;

        const li = document.createElement("li");
        li.textContent = key === "dueDate" ? formatDueDate(value) : value;
        li.classList.add(...taskFields[key]);
        list.appendChild(li);
    }

    container.appendChild(list);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("ml-auto", "h-2xl", "flex", "flex-col");

    const editBtn = createOptionsBtn("fa-pen-to-square");
    const deleteBtn = createOptionsBtn("fa-trash");

    deleteBtn.addEventListener("click", () => {
        // removeTask(task.id, tasksArray);
        showDeleteTaskModal(task, tasksArray);
    });

    optionsContainer.appendChild(deleteBtn);
    optionsContainer.appendChild(editBtn);
    container.appendChild(optionsContainer);

    return container;
};

// Iterate through tasksArray and display in the DOM
const displayTasks = (tasksArray) => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    tasksArray.forEach(task => projectsContainer.appendChild(createTaskElement(task, tasksArray)));
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

export { createTaskElement, displayTasks, clearTaskInput }