import { Project } from "../models";
import { populateProjects } from "./dropdown";
import { displayProjects, removeProject } from "./projectElement";
import { openModal, saveToLocalStorage } from "../utils"

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

const showDeleteProjectModal = (project, projectsArray) => {
    const deleteProjectModal = document.getElementById("delete-project-modal");
    openModal(deleteProjectModal.id);

    const deleteProjectSpan = document.getElementById("delete-project-span");
    deleteProjectSpan.textContent = `${project.name}`;

    const cancelDeleteBtn = document.getElementById("cancel-delete-project-btn");
    const confirmDeleteBtn = document.getElementById("confirm-delete-project-btn");

    // Cleanup previous listeners (optional if you run into duplicates)
    const newCancelBtn = cancelDeleteBtn.cloneNode(true);
    cancelDeleteBtn.replaceWith(newCancelBtn);
    const newConfirmBtn = confirmDeleteBtn.cloneNode(true);
    confirmDeleteBtn.replaceWith(newConfirmBtn);

    newCancelBtn.addEventListener("click", () => {
        deleteProjectModal.classList.add("invisible");
    });

    newConfirmBtn.addEventListener("click", () => {
        removeProject(project.id, projectsArray);
        deleteProjectModal.classList.add("invisible");
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

export { initAddProjectModal, initProjectForm, showDeleteProjectModal }