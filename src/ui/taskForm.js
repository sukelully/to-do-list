import { displayTasks } from "./taskElement.js";
import { Task } from "../models.js";

const initTaskForm = (project) => {
    const form = document.getElementById("add-task-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
        });

        project.tasksArray.push(new Task(task.name, task.description, new Date(task.date), task.priority));
        displayTasks(project);

        document.getElementById("add-task-modal").classList.toggle("invisible");
    });
}

export { initTaskForm }
