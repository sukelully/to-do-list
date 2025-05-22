import { displayTasks } from "./taskElement.js";
import { Task } from "../task.js";

const initTaskForm = (tasksArray) => {
    const form = document.getElementById("add-task-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
        });

        tasksArray.push(new Task(task.name, task.description, new Date(task.date), task.priority));
        displayTasks(tasksArray);

        document.getElementById("add-task-modal").classList.toggle("invisible");
    });
}

export { initTaskForm }
