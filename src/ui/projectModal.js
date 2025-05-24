import { Project } from "../models.js";
import { populateProjects } from "./dropdown.js";
import { displayProjects } from "./projectElement.js";
import { openModal, saveToLocalStorage } from "../utils.js"

const initAddProjectModal = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const addProjectBtn = document.getElementById("add-project-btn");
        const cancelAddProjectBtn = document.getElementById("cancel-add-project-btn");
        const addProjectModal = document.getElementById("add-project-modal");

        addProjectBtn.addEventListener("click", () => {
            clearProjectInput();
            // addProjectModal.classList.toggle("invisible");
            openModal(addProjectModal.id);
        });

        cancelAddProjectBtn.addEventListener("click", () => {
            addProjectModal.classList.add("invisible");
        });
    });
};

const clearProjectInput = () => {
    const projectNameInput = document.getElementById("project-name-input");
    projectNameInput.value = "";
};

const initProjectForm = (projectsArray) => {
    const form = document.getElementById("add-project-form");
    const addProjectModal = document.getElementById("add-project-modal");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("test");
        
        const formData = new FormData(e.target);
        const projectName = formData.get("project-name");

        projectsArray.push(new Project(projectName));
        saveToLocalStorage(projectsArray);
        displayProjects(projectsArray);
        populateProjects(projectsArray);
        
        addProjectModal.classList.add("invisible");
    });
};

export { initAddProjectModal, initProjectForm }