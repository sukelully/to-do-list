import { displayTasks } from "./taskElement";
import { saveToLocalStorage } from "../utils.js";
import { showDeleteProjectModal } from "./projectModal.js";

const createProjectContainer = (project, projectsArray) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("flex", "flex-col", "gap-4", "w-64");

    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.classList.add("flex", "items-center");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = `${project.name}`;
    projectTitle.classList.add("font-semibold");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "ml-auto", "pr-4", "cursor-pointer");
    deleteIcon.addEventListener("click", () =>{
        // console.log(project.id, projectsArray);
        // removeProject(project.id, projectsArray);
        showDeleteProjectModal(project, projectsArray);
    });

    projectTitleContainer.appendChild(projectTitle);
    projectTitleContainer.appendChild(deleteIcon);
    projectContainer.appendChild(projectTitleContainer);
    
    return projectContainer;
}

// Remove specified task from tasksArray
const removeProject = (id, projectsArray) => {
    const projectIndex = projectsArray.findIndex(proj => proj.id === id);
    if (projectIndex !== -1) {
        projectsArray.splice(projectIndex, 1);
    }
    // displayTasks(project);
    displayProjects(projectsArray)
    saveToLocalStorage(projectsArray);
};

const displayProjects = (projectsArray) => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    
    for (const project of projectsArray) {
        displayTasks(project, projectsArray);
    }
}

export { createProjectContainer, displayProjects, removeProject }