import "./styles.css";
import { Project, Task } from "./models";
import { initSidebar, initMobileSidebar } from "./ui/sidebar";
import { initAddTaskModal, populateProjects } from "./ui/dropdown";
import { initTaskForm } from "./ui/taskModal";
import { displayProjects } from "./ui/projectElement"
import { initAddProjectModal, initProjectForm } from "./ui/projectModal";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils";

const projectsArray: Project[] = [];

loadFromLocalStorage(projectsArray);

if (projectsArray.length === 0) {
    const taskTest = new Task("Walk Monty", "And praise him", new Date(2025, 5, 24), 1);
    const taskTest2 = new Task("Do dishes", null, new Date(2024, 6, 13), 2);
    const defaultProject = new Project("Daily To Do", [taskTest, taskTest2]);

    projectsArray.push(defaultProject);
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
