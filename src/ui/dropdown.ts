import { updateDateInput } from "../date";
import { clearTaskInput } from "./taskModal"
import { openModal } from "../utils";
import { Project } from "../models";

const initAddTaskModal = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // Priority dropdown elements
        const priorityBtn = document.getElementById("priority-dropdown-btn");
        const priorityMenu = document.getElementById("priority-dropdown");
        const prioritySelect = document.getElementById("priority");

        // Project dropdown elements
        const projectBtn = document.getElementById("project-dropdown-btn");
        const projectMenu = document.getElementById("project-dropdown");
        const projectSelect = document.getElementById("project");

        const cancelBtn = document.getElementById("cancel-btn");
        const addTaskModal = document.getElementById("add-task-modal");
        const addTaskBtn = document.getElementById("add-task-btn");
        const dateInput = document.getElementById("date-input");

        // Toggle priority dropdown
        priorityBtn.addEventListener("click", (e) => {
            e.preventDefault();
            priorityMenu.classList.toggle("hidden");
        });

        // Handle priority item click
        priorityMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const label = item.textContent.trim();
                const icon = item.querySelector("i").outerHTML;
                console.log(value);

                if (value == "null") {
                    priorityBtn.innerHTML = resetDropdownContent("Priority");
                } else {
                    priorityBtn.innerHTML = setDropdownContent(icon, label);
                }

                prioritySelect.value = value;
                priorityMenu.classList.add("hidden");
            });
        });

        // Toggle project dropdown
        projectBtn.addEventListener("click", (e) => {
            e.preventDefault();
            projectMenu.classList.toggle("hidden");
        });

        // Handle project item click
        projectMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const label = item.textContent.trim();
                const icon = item.querySelector("i")?.outerHTML || "";

                if (value === "null") {
                    projectBtn.innerHTML = resetDropdownContent("Project");
                } else {
                    projectBtn.innerHTML = setDropdownContent(icon, label);
                }

                projectSelect.value = value;
                projectMenu.classList.add("hidden");
            });
        });

        // Date change
        dateInput.addEventListener("change", () => updateDateInput(dateInput));

        // Open/close modal
        cancelBtn.addEventListener("click", () => {
            addTaskModal.classList.add("invisible");
        });

        addTaskBtn.addEventListener("click", () => {
            clearTaskInput();
            openModal(addTaskModal.id);
        });

        // Optional: click outside to close dropdowns
        document.addEventListener("click", (e) => {
            if (!priorityBtn.contains(e.target) && !priorityMenu.contains(e.target)) {
                priorityMenu.classList.add("hidden");
            }
            if (!projectBtn.contains(e.target) && !projectMenu.contains(e.target)) {
                projectMenu.classList.add("hidden");
            }
        });
    });
};

const setDropdownContent = (iconHTML: string, label: string) => {
    return `${iconHTML}<span>${label}</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
};

const resetDropdownContent = (label: string) => {
    return `<span class="text-neutral-500">${label}</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
};

const getPriorityColor = (priority: number) => {
    switch (priority) {
        case 1: return "text-green-600";
        case 2: return "text-amber-500";
        case 3: return "text-red-600";
        default: return "text-white";
    }
};

const populateProjects = (projectsArray: Project[]) => {
    const projectMenu = document.getElementById("project-dropdown");
    const projectSelect = document.getElementById("project");
    const projectDropdownBtn = document.getElementById("project-dropdown-btn");

    // Clear existing items
    projectMenu.innerHTML = '';
    projectSelect.innerHTML = '';

    projectsArray.forEach((project, index) => {
        const name = project.name;
        const value = project.name;

        // Add to custom dropdown
        const li = document.createElement("li");
        li.dataset.value = value;
        li.className = "flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-stone-200";
        li.innerHTML = `<i class="fa-solid fa-folder text-indigo-500"></i>${name}`;
        projectMenu.appendChild(li);

        // Add to native <select>
        const option = document.createElement("option");
        option.value = value;
        option.textContent = name;
        projectSelect.appendChild(option);

        // Preselect the first project
        if (index === 0) {
            projectSelect.value = value;
            projectDropdownBtn.innerHTML = setDropdownContent(
                `<i class="fa-solid fa-folder text-indigo-500"></i>`, name
            );
        }
    });

    // Add click event listeners to dropdown items
    projectMenu.querySelectorAll("li").forEach((item) => {
        item.addEventListener("click", () => {
            const value = item.dataset.value;
            const label = item.textContent.trim();
            const icon = item.querySelector("i").outerHTML;

            projectDropdownBtn.innerHTML = setDropdownContent(icon, label);
            projectSelect.value = value;

            projectMenu.classList.add("hidden");
        });
    });
};


export { initAddTaskModal, setDropdownContent, resetDropdownContent, getPriorityColor, populateProjects };
