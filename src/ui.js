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
            addTaskModal.classList.add("invisible");
        });

        addTaskBtn.addEventListener("click", () => {
            addTaskModal.classList.toggle("invisible");
        });
    });
}

const clearTaskInput = () => {
    const dateInput = document.getElementById("date-input");
    dateInput.value = "";
    updateDateInput(dateInput);
    document.getElementById("task-name-input").value = "";
    document.getElementById("task-description-input").value = "";
}

export { initSidebar, initDropdown, updateDateInput }