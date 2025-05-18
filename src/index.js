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
tasksArray.push(taskTest2);

const displayTasks = (function () {
    const projectsContainer = document.getElementById("projects.container");
    for (const task of tasksArray) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex gap-4", "items-start");
        
        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa-solid", "fa-flag", "py-2");

        const list = document.getElementById("task-test");

        Object.entries(task).forEach(([key, value]) => {
            const li = document.createElement("li");
            li.textContent = `${value}`
            switch (key) {
                case 'task':
                    li.classList.add('font-bold');
                    break;
                case 'description':
                    li.classList.add('text-slate-400', 'text-sm');
                case 'dueDate':
                    li.textContent = `${key === 'dueDate' ? value.toLocaleDateString() : value}`;
                default:
                    break;
            }
            list.appendChild(li);
        });
    }
})();
