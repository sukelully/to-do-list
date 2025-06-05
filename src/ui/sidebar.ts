import { clearTaskInput } from "./taskModal";
import { getRequiredElement } from "../utils";


const initSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleSidebarBtn = getRequiredElement<HTMLButtonElement>("toggle-sidebar-btn");
        const layout = getRequiredElement<HTMLElement>("layout");
        const sidebar = getRequiredElement<HTMLElement>("sidebar");
        const addTaskBtn = getRequiredElement<HTMLButtonElement>("add-task-btn");
        const addProjectBtn = getRequiredElement<HTMLButtonElement>("add-project-btn");

        toggleSidebarBtn.addEventListener("click", () => {
            layout.classList.toggle("hidden-sidebar");
            sidebar.classList.toggle("bg-stone-100");
            sidebar.classList.toggle("bg-stone-50");
            addTaskBtn.classList.toggle("invisible");
            addProjectBtn.classList.toggle("invisible");
        });
    });
};

const initMobileSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleBtn = getRequiredElement<HTMLButtonElement>("toggle-mobile-sidebar-btn");
        const closeBtn = getRequiredElement<HTMLButtonElement>("close-mobile-sidebar-btn");
        const sidebar = getRequiredElement<HTMLElement>("mobile-sidebar");

        const openSidebar = () => sidebar.classList.remove("-translate-x-full");
        const closeSidebar = () => sidebar.classList.add("-translate-x-full");

        toggleBtn.addEventListener("click", openSidebar);
        closeBtn.addEventListener("click", closeSidebar);

        // Handle modal triggers
        const modalTriggers = sidebar.querySelectorAll("[data-action]");
        modalTriggers.forEach(btn => {
            btn.addEventListener("click", () => {
                const button = btn as HTMLElement;
                const action = button.dataset.action;
                if (action === "add-task") {
                    clearTaskInput();
                    getRequiredElement<HTMLDivElement>("add-task-modal").classList.remove("invisible");
                } else if (action === "add-project") {
                    getRequiredElement<HTMLDivElement>("add-project-modal").classList.remove("invisible");
                } else if (action === "calendar") {
                    // Handle calendar button (if needed)
                }
                closeSidebar(); // Optional: close menu after selection
            });
        });
    });
};
export { initSidebar, initMobileSidebar }
