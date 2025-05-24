import "./styles.css";
import { Project, Task } from "./models.js";
import { initSidebar, initMobileSidebar } from "./ui/sidebar.js";
import { initAddTaskModal, populateProjects } from "./ui/dropdown.js";
import { initTaskForm } from "./ui/taskModal.js";
import { displayProjects } from "./ui/projectElement.js"
import { initAddProjectModal, initProjectForm } from "./ui/projectModal.js";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils.js";

const tasksArray = [];
const projectsArray = [];

loadFromLocalStorage(projectsArray);

if (projectsArray.length === 0) {
    // Optional: Add test data if nothing is stored
    const taskTest = new Task("Do laundry", "fold and do dishes", new Date(2025, 5, 24), 3);
    const taskTest2 = new Task("Do dishes", "Walk dog idk", new Date(2024, 6, 13), 2);
    const testProject = new Project("Test project", [taskTest, taskTest2]);
    const project2 = new Project("Second project", [taskTest, taskTest2]);

    projectsArray.push(testProject, project2);
    saveToLocalStorage(projectsArray);
}

displayProjects(projectsArray);
populateProjects(projectsArray);

initSidebar();
initMobileSidebar();
initAddTaskModal();
initAddProjectModal();
initTaskForm(projectsArray);
initProjectForm(projectsArray);
