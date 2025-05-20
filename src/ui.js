import { formatDueDate, isPastDue } from "./date.js";

const initSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
        const layout = document.getElementById("layout");
        const sidebar = document.getElementById("sidebar");
    
        toggleSidebarBtn.addEventListener("click", () => {
            layout.classList.toggle("hidden-sidebar");
            sidebar.classList.toggle("bg-stone-100");
            sidebar.classList.toggle("bg-stone-50");
        });
    });
}

// Update text color to display whether a date is selected or not
const updateDateInput = (dateInput) => {
    if (dateInput.value !== "") {
        dateInput.classList.remove("text-neutral-500");
    } else {
        dateInput.classList.add("text-neutral-500");
    }
}

const initDropdown = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const dropdownBtn = document.getElementById("dropdown-btn");
        const dropdownMenu = document.getElementById("dropdown-menu");
        const selectElement = document.getElementById("priority-select");
        const cancelBtn = document.getElementById("cancel-btn");
        const addTaskModal = document.getElementById("add-task-modal");
        const addTaskBtn = document.getElementById("add-task-btn");
        const dateInput = document.getElementById("date-input");

        dropdownBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle("hidden");
        });

        dateInput.addEventListener("change", () => {
            updateDateInput(dateInput);
        })

        dropdownMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const label = item.textContent.trim();
                const icon = item.querySelector("i").outerHTML;

                if (value === "null") {
                    dropdownBtn.innerHTML = `<span class="text-neutral-500">Priority</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
                } else {
                    dropdownBtn.innerHTML = `${icon}<span>${label}</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
                }

                selectElement.value = value;

                dropdownMenu.classList.toggle("hidden");
            });
        });

        cancelBtn.addEventListener("click", () => {
            clearTaskInput();
            addTaskModal.classList.add("hidden");
        });

        addTaskBtn.addEventListener("click", () => {
            clearTaskInput();
            addTaskModal.classList.toggle("hidden");
        });
    });
}

const clearTaskInput = () => {
    const dateInput = document.getElementById("date-input");
    dateInput.value = "";
    updateDateInput(dateInput);

    document.getElementById("task-name-input").value = "";
    document.getElementById("task-description-input").value = "";

    const dropdownBtn = document.getElementById("dropdown-btn");
    dropdownBtn.innerHTML = `<span class="text-neutral-500">Priority</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
}

const displayTasks = (tasksArray) => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";

    for (const task of tasksArray) {
        const taskDiv = document.createElement("div");
        projectsContainer.appendChild(taskDiv);
        taskDiv.id = "task-container";
        taskDiv.classList.add("border", "border-solid", "border-slate-300", "rounded-lg", "p-4", "flex", "gap-4", "items-start", "shadow-xs", "hover:shadow-md", "duration-300", "hover:border-slate-400", "transition-all", "min-w-full", "group");

        const list = document.createElement("ul");

        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa-solid", "fa-flag", "py-2");
        switch (task.priority) {
            case null:
                priorityIcon.classList.add("text-white")
                break;
            case 1:
                priorityIcon.classList.add("text-green-600");
                break;
            case 2:
                priorityIcon.classList.add("text-amber-500");
                break;
            case 3:
                priorityIcon.classList.add("text-red-600");
                break;
        }
        taskDiv.appendChild(priorityIcon);

        Object.entries(task).forEach(([key, value]) => {
            const li = document.createElement("li");
            switch (key) {
                case "task":
                    li.textContent = `${value}`
                    li.classList.add("font-bold");
                    break;
                case "description":
                    li.textContent = `${value}`
                    li.classList.add("text-slate-400", "text-sm");
                    break;
                case "dueDate":
                    li.textContent = formatDueDate(value);
                    if (isPastDue(value)) {
                        li.classList.add("text-red-400", "text-sm");
                    } else {
                        li.classList.add("text-slate-400", "text-sm");
                    }
                    break;
                default:
                    break;
            }
            list.appendChild(li);
            taskDiv.appendChild(list);
        });
        const optionsButton = document.createElement("button");
        optionsButton.classList.add("ml-auto")

        const optionsIcon = document.createElement("i");
        optionsIcon.classList.add("fa-solid", "fa-ellipsis", "item-end", "invisible", "group-hover:visible", "cursor-pointer");

        optionsButton.appendChild(optionsIcon);
        taskDiv.appendChild(optionsButton);
    }
};

export { initSidebar, initDropdown, updateDateInput, displayTasks }