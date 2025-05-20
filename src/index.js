import "./styles.css";
import { Task } from "./task.js";
import { initSidebar, initDropdown, updateDateInput } from "./ui.js";
import { formatDueDate, isPastDue } from "./date.js";

initSidebar();
initDropdown();
updateDateInput();

const tasksArray = [];
const taskTest = new Task(
    "Do laundry",
    "fold and do dishes",
    new Date(2025, 5, 24),
    3);

const taskTest2 = new Task(
    "Do dishes",
    "Walk dog idk",
    new Date(2024, 6, 13),
    2);

tasksArray.push(taskTest);
tasksArray.push(taskTest2);

const displayTasks = () => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";

    for (const task of tasksArray) {
        const taskDiv = document.createElement("div");
        projectsContainer.appendChild(taskDiv);
        taskDiv.id = "task-container";
        taskDiv.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start", "shadow-xs", "hover:shadow-md", "duration-300", "hover:border-slate-400", "transition-all", "min-w-full", "group");

        const list = document.createElement("ul");

        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa-solid", "fa-flag", "py-2");
        switch (task.priority) {
            case null:
                priorityIcon.classList.add("text-white")
                break;
            case 1:
                priorityIcon.classList.add("text-green-600");
                break;
            case 2:
                priorityIcon.classList.add("text-amber-500");
                break;
            case 3:
                priorityIcon.classList.add("text-red-600");
                break;
        }
        taskDiv.appendChild(priorityIcon);

        Object.entries(task).forEach(([key, value]) => {
            const li = document.createElement("li");
            switch (key) {
                case "task":
                    li.textContent = `${value}`
                    li.classList.add("font-bold");
                    break;
                case "description":
                    li.textContent = `${value}`
                    li.classList.add("text-slate-400", "text-sm");
                    break;
                case "dueDate":
                    li.textContent = formatDueDate(value);
                    if (isPastDue(value)) {
                        li.classList.add("text-red-400", "text-sm");
                    } else {
                        li.classList.add("text-slate-400", "text-sm");
                    }
                    break;
                default:
                    break;
            }
            list.appendChild(li);
            taskDiv.appendChild(list);
        });
        const optionsButton = document.createElement("button");
        optionsButton.classList.add("ml-auto")

        const optionsIcon = document.createElement("i");
        optionsIcon.classList.add("fa-solid", "fa-ellipsis", "item-end", "invisible", "group-hover:visible", "cursor-pointer");

        optionsButton.appendChild(optionsIcon);
        taskDiv.appendChild(optionsButton);
    }
};

displayTasks();

const addTask = (function () {
    const form = document.getElementById("add-task-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
        });

        tasksArray.push(new Task(task.name, task.description, new Date(task.date), task.priority));
        displayTasks();
    });
})();