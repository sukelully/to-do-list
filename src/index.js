import "./styles.css";
import { Task } from "./task.js";

const tasksArray = [];
const taskTest = new Task(
    "Do laundry",
    "fold and do dishes",
    new Date(2025, 5, 24),
    3);

const taskTest2 = new Task(
    "Do dishes",
    "Walk dog idk",
    new Date(2025, 6, 13),
    2);

tasksArray.push(taskTest);
// tasksArray.push(taskTest2);

const displayTasks = (function () {
    const projectsContainer = document.getElementById("projects-container");

    for (const task of tasksArray) {
        const taskDiv = document.createElement("div");
        projectsContainer.appendChild(taskDiv);
        taskDiv.id = "task-container";
        taskDiv.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start");

        const list = document.createElement("ul");

        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa-solid", "fa-flag", "py-2");
        switch (task.priority) {
            case 0:
                break;
            case 1:
                priorityIcon.classList.add("text-green-600");
                break;
            case 2:
                priorityIcon.classList.add("text-yellow-600");
                break;
            case 3:
                priorityIcon.classList.add("text-red-600");
                break;
        }
        taskDiv.appendChild(priorityIcon);

        Object.entries(task).forEach(([key, value]) => {
            const li = document.createElement("li");
            switch (key) {
                case 'task':
                    li.textContent = `${value}`
                    li.classList.add('font-bold');
                    break;
                case 'description':
                    li.textContent = `${value}`
                    li.classList.add('text-slate-400', 'text-sm');
                    break;
                case 'dueDate':
                    li.textContent = `${key === 'dueDate' ? value.toLocaleDateString() : value}`;
                    break;
                default:
                    break;
            }
            list.appendChild(li);
            taskDiv.appendChild(list);
        });
    }
})();
