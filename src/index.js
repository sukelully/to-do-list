import "./styles.css";
import { Task } from "./task.js";

const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
const layout = document.getElementById("layout");
const sidebar = document.getElementById("sidebar");

toggleSidebarBtn.addEventListener("click", () => {
    layout.classList.toggle("hidden-sidebar");
    sidebar.classList.toggle("bg-stone-100");
    sidebar.classList.toggle("bg-stone-50");
});

document.addEventListener("DomContentLoaded", () => {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const selectElement = document.getElementById("priority-select");

    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    })
})

const tasksArray = [];
const taskTest = new Task(
    "Do laundry",
    "fold and do dishes",
    new Date(2025, 5, 24),
    3);

const taskTest2 = new Task(
    "Do dishes",
    "Walk dog idk",
    new Date(2026, 6, 13),
    2);

tasksArray.push(taskTest);
tasksArray.push(taskTest2);

const displayMonth = (month) => {
    switch (month) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
        default:
            return "Date error: Invalid month";
    }
}

const displayYear = (year) => {
    const currentYear = new Date().getFullYear();

    if (year != currentYear) {
        return year;
    } else {
        return "";
    }
}

const displayTasks = (function () {
    const projectsContainer = document.getElementById("projects-container");

    for (const task of tasksArray) {
        const taskDiv = document.createElement("div");
        projectsContainer.appendChild(taskDiv);
        taskDiv.id = "task-container";
        taskDiv.classList.add("border","border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start", "shadow-xs", "hover:shadow-md", "duration-300", "hover:border-slate-400", "transition-all", "min-w-full", "group");

        const list = document.createElement("ul");

        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa-solid", "fa-flag", "py-2");
        switch (task.priority) {
            case 0:
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
                    li.textContent = `${key === "dueDate" ? `${value.getDate()} ${displayMonth(value.getMonth())} ${displayYear(value.getFullYear())}` : value}`;
                    li.classList.add("text-slate-400", "text-sm")
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
})();

const addTask = () => {

}