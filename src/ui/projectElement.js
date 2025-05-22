import { displayTasks } from "./taskElement";

const createProjectContainer = (project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("flex", "flex-col", "gap-4", "w-64");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = `${project.name}`;
    projectTitle.classList.add("font-semibold");

    projectContainer.appendChild(projectTitle);
    
    return projectContainer;
}

const displayProjects = (projectsArray) => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    
    for (const project of projectsArray) {
        displayTasks(project, projectsArray);
    }
}

export { createProjectContainer, displayProjects }