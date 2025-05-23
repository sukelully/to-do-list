import "./styles.css";
import { Project, Task } from "./models.js";
import { initSidebar } from "./ui/sidebar.js";
import { initDropdown, populateProjects } from "./ui/dropdown.js";
import { initTaskForm } from "./ui/taskForm.js";
import { displayProjects } from "./ui/projectElement.js"
import { initAddProjectModal, initProjectForm } from "./ui/projectModal.js";

const tasksArray = [];
const projectsArray = [];

const taskTest = new Task(
    "Do laundry",
    "fold and do dishes",
    new Date(2025, 5, 24),
    3);

const taskTest2 = new Task(
    "Do dishes",
    "Walk dog idk",
    new Date(2024, 6, 13),
    2);

tasksArray.push(taskTest);
tasksArray.push(taskTest2);

const testProject = new Project("Test project", [...tasksArray]);
const project2 = new Project("Second project", [...tasksArray]);

projectsArray.push(testProject, project2);

displayProjects(projectsArray);
populateProjects(projectsArray);

initSidebar();
initDropdown();
initAddProjectModal();
initTaskForm(projectsArray);
initProjectForm(projectsArray);
