import { Task, Project } from "./models";

type RawTask = {
    task: string;
    description: string;
    dueDate: string;
    priority: number;
    id?: string;
};

type RawProject = {
    name: string;
    tasksArray: RawTask[];
    id?: string;
}

function getRequiredElement<T extends HTMLElement>(id: string): T {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Element with id "${id}" not found`);
    return el as T;
}

const openModal = (id: string) => {
    // Close all modals
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.add("invisible");
    });

    // Open selected modal
    getRequiredElement<HTMLElement>(id).classList.remove("invisible");
};

const saveToLocalStorage = (projectsArray: Project[]) => {
    localStorage.setItem("projects", JSON.stringify(projectsArray));
};

const loadFromLocalStorage = (projectsArray: Project[]) => {
    const stored = localStorage.getItem("projects");
    if (!stored || stored === "undefined") return;

    const parsed = JSON.parse(stored);

    projectsArray.length = 0;
    (parsed as RawProject[]).forEach((proj: RawProject) => {
        const tasks = proj.tasksArray.map(task => new Task(task.task, task.description, new Date(task.dueDate), task.priority));
        projectsArray.push(new Project(proj.name, tasks));
    });
};

export { openModal, saveToLocalStorage, loadFromLocalStorage, getRequiredElement }
