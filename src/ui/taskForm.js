import { displayTasks } from "./taskElement.js";
import { Task } from "../models.js";
import { displayProjects } from "./projectElement.js";

const initTaskForm = (projectsArray) => {
    const form = document.getElementById("add-task-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
            // console.log(`${key}, ${value}`);
        });

        projectsArray[0].tasksArray.push(new Task(task.name, task.description, new Date(task.date), parseInt(task.priority)));
        // displayTasks(project);
        displayProjects(projectsArray);

        document.getElementById("add-task-modal").classList.toggle("invisible");
    });
}

export { initTaskForm }
