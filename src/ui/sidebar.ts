import { clearTaskInput } from "./taskModal";

const initSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
        const layout = document.getElementById("layout");
        const sidebar = document.getElementById("sidebar");
        const addTaskBtn = document.getElementById("add-task-btn");
        const calendarBtn = document.getElementById("calendar-btn");
        const addProjectBtn = document.getElementById("add-project-btn");

        toggleSidebarBtn.addEventListener("click", () => {
            layout.classList.toggle("hidden-sidebar");
            sidebar.classList.toggle("bg-stone-100");
            sidebar.classList.toggle("bg-stone-50");
            addTaskBtn.classList.toggle("invisible");
            calendarBtn.classList.toggle("invisible");
            addProjectBtn.classList.toggle("invisible");
        });
    });
};

const initMobileSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleBtn = document.getElementById("toggle-mobile-sidebar-btn");
        const closeBtn = document.getElementById("close-mobile-sidebar-btn");
        const sidebar = document.getElementById("mobile-sidebar");

        const openSidebar = () => sidebar.classList.remove("-translate-x-full");
        const closeSidebar = () => sidebar.classList.add("-translate-x-full");

        toggleBtn.addEventListener("click", openSidebar);
        closeBtn.addEventListener("click", closeSidebar);

        // Handle modal triggers
        const modalTriggers = sidebar.querySelectorAll("[data-action]");
        modalTriggers.forEach(btn => {
            btn.addEventListener("click", () => {
                const action = btn.dataset.action;
                if (action === "add-task") {
                    clearTaskInput();
                    document.getElementById("add-task-modal").classList.remove("invisible");
                } else if (action === "add-project") {
                    document.getElementById("add-project-modal").classList.remove("invisible");
                } else if (action === "calendar") {
                    // Handle calendar button (if needed)
                }
                closeSidebar(); // Optional: close menu after selection
            });
        });
    });
};
export { initSidebar, initMobileSidebar }
