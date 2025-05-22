import { updateDateInput } from "../date.js";
import { clearTaskInput } from "./taskElement.js"

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

        dateInput.addEventListener("change", () => updateDateInput(dateInput));

        dropdownMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const label = item.textContent.trim();
                const icon = item.querySelector("i").outerHTML;

                if (value === "null") {
                    dropdownBtn.innerHTML = resetDropdownContent();
                } else {
                    dropdownBtn.innerHTML = setDropdownContent(icon, label);
                }

                selectElement.value = value;

                dropdownMenu.classList.toggle("hidden");
            });
        });

        cancelBtn.addEventListener("click", () => {
            clearTaskInput();
            addTaskModal.classList.add("invisible");
        });

        addTaskBtn.addEventListener("click", () => {
            clearTaskInput();
            addTaskModal.classList.toggle("invisible");
        });
    });
};

const setDropdownContent = (iconHTML, label) => {
    return `${iconHTML}<span>${label}</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
};

const resetDropdownContent = () => {
    return `<span class="text-neutral-500">Priority</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
};

const getPriorityColor = (priority) => {
    switch (priority) {
        case 1: return "text-green-600";
        case 2: return "text-amber-500";
        case 3: return "text-red-600";
        default: return "text-white";
    }
};

export { initDropdown, setDropdownContent, resetDropdownContent, getPriorityColor }
