import { Task, Project } from "./models.js";

const openModal = (id) => {
    // Close all modals
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.add("invisible");
    });

    // Open selected modal
    document.getElementById(id).classList.remove("invisible");
};

const saveToLocalStorage = (projectsArray) => {
    localStorage.setItem("projects", JSON.stringify(projectsArray));
};

const loadFromLocalStorage = (projectsArray) => {
    const stored = localStorage.getItem("projects");
    if (!stored || stored === "undefined") return;

    const parsed = JSON.parse(stored);

    projectsArray.length = 0;
    parsed.forEach(proj => {
        const tasks = proj.tasksArray.map(task => new Task(task.task, task.description, new Date(task.dueDate), task.priority));
        projectsArray.push(new Project(proj.name, tasks));
    });
};

export { openModal, saveToLocalStorage, loadFromLocalStorage }