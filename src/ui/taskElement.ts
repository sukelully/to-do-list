import { formatDueDate, isPastDue } from "../date.ts";
import { getPriorityColor } from "./dropdown.ts";
import { showDeleteTaskModal } from "./taskModal.ts";
import { createProjectContainer } from "./projectElement.ts";

// Create edit / delete btn for task elements
const createOptionsBtn = (iconString) => {
    const btn = document.createElement("button");
    btn.classList.add("ml-auto", "md:invisible", "group-hover:visible", "cursor-pointer");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", `${iconString}`);

    btn.appendChild(icon);

    return btn;
};

const createTaskElement = (task, project, projectsArray) => {
    const container = document.createElement("div");
    container.id = "task-container";
    container.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start", "shadow-xs", "hover:shadow-md", "duration-300", "hover:border-slate-400", "transition-all", "sm:min-w-full", "group", "w-64");

    const priorityIcon = document.createElement("i");
    priorityIcon.classList.add("fa-solid", "fa-circle", "py-2", getPriorityColor(task.priority));
    container.appendChild(priorityIcon);

    const list = document.createElement("ul");

    const taskFields = {
        task: ["font-normal"],
        description: ["text-slate-400", "text-sm"],
        dueDate: isPastDue(task.dueDate) ? ["text-red-400", "text-sm"] : ["text-slate-400", "text-sm"]
    };

    for (const [key, value] of Object.entries(task)) {
        if (!(key in taskFields)) continue;

        const li = document.createElement("li");
        li.textContent = key === "dueDate" ? formatDueDate(value) : value;
        li.classList.add(...taskFields[key]);
        list.appendChild(li);
    }

    container.appendChild(list);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("ml-auto", "h-2xl", "flex", "flex-col");

    // const editBtn = createOptionsBtn("fa-pen-to-square");
    const deleteBtn = createOptionsBtn("fa-trash");

    deleteBtn.addEventListener("click", () => {
        showDeleteTaskModal(task, project, projectsArray);
    });

    optionsContainer.appendChild(deleteBtn);
    // optionsContainer.appendChild(editBtn);
    container.appendChild(optionsContainer);

    return container;
};

// Iterate through tasksArray and display in the DOM
const displayTasks = (project, projectsArray) => {
    const projectsContainer = document.getElementById("projects-container");

    const projectContainer = createProjectContainer(project, projectsArray);
    projectsContainer.appendChild(projectContainer);

    project.tasksArray.forEach(task => {
        projectContainer.appendChild(createTaskElement(task, project, projectsArray));
    });
};

export { createTaskElement, displayTasks }
