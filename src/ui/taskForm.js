import { displayTasks } from "./taskElement.js";
import { Task } from "../models.js";
import { displayProjects } from "./projectElement.js";
import { populateProjects } from "./dropdown.js";

const initTaskForm = (projectsArray) => {
    const form = document.getElementById("add-task-form");
    populateProjects(projectsArray);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
            console.log(`${key}, ${value}`);
        });

        for (const project of projectsArray) {
            if (project.name === task.project) {
                project.tasksArray.push(new Task(task.name, task.description, new Date(task.date), parseInt(task.priority)));
            }
        }

        // projectsArray[1].tasksArray.push(new Task(task.name, task.description, new Date(task.date), parseInt(task.priority)));
        // // displayTasks(project);
        displayProjects(projectsArray);

        document.getElementById("add-task-modal").classList.toggle("invisible");
    });
}

export { initTaskForm }
