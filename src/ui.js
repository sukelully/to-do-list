const initSidebar = () => {
    const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
    const layout = document.getElementById("layout");
    const sidebar = document.getElementById("sidebar");

    toggleSidebarBtn.addEventListener("click", () => {
        layout.classList.toggle("hidden-sidebar");
        sidebar.classList.toggle("bg-stone-100");
        sidebar.classList.toggle("bg-stone-50");
    });
}

const initDropdown = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const dropdownBtn = document.getElementById("dropdown-btn");
        const dropdownMenu = document.getElementById("dropdown-menu");
        const selectElement = document.getElementById("priority-select");
    
        dropdownBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle("hidden");
        });
    
        dropdownMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const label = item.textContent.trim();
                const icon = item.querySelector("i").outerHTML;
    
                dropdownBtn.innerHTML = `${icon}<span>${label}</span><i class="fa-solid fa-chevron-down ml-auto"></i>`;
    
                selectElement.value = value;
    
                dropdownMenu.classList.add("hidden");
            });
        });
    
        document.addEventListener("click", (e) => {
            if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add("hidden");
            }
        });
    });
}

export { initSidebar, initDropdown }