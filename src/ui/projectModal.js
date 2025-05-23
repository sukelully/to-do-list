import { Project } from "../models";
import { populateProjects } from "./dropdown";
import { displayProjects } from "./projectElement";

const initAddProjectModal = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const addProjectBtn = document.getElementById("add-project-btn");
        const cancelAddProjectBtn = document.getElementById("cancel-add-project-btn");
        const addProjectModal = document.getElementById("add-project-modal");

        addProjectBtn.addEventListener("click", () => {
            addProjectModal.classList.toggle("invisible");
        });

        cancelAddProjectBtn.addEventListener("click", () => {
            addProjectModal.classList.add("invisible");
        });
    });
};

const initProjectForm = (projectsArray) => {
    const form = document.getElementById("add-project-form");
    const addProjectModal = document.getElementById("add-project-modal");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const projectName = formData.get("project-name");

        console.log(projectName);

        projectsArray.push(new Project(projectName));
        displayProjects(projectsArray);
        populateProjects(projectsArray);
        
        addProjectModal.classList.add("invisible");
    });
};

export { initAddProjectModal, initProjectForm }