const initSidebar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
        const layout = document.getElementById("layout");
        const sidebar = document.getElementById("sidebar");
        const addTaskBtn = document.getElementById("add-task-btn");
        const calendarBtn = document.getElementById("calendar-btn");
    
        toggleSidebarBtn.addEventListener("click", () => {
            layout.classList.toggle("hidden-sidebar");
            sidebar.classList.toggle("bg-stone-100");
            sidebar.classList.toggle("bg-stone-50");
            addTaskBtn.classList.toggle("invisible");
            calendarBtn.classList.toggle("invisible");
        });
    });
};

export { initSidebar }
