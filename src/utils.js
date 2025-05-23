const openModal = (id) => {
    // Close all modals
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.add("invisible");
    });

    // Open selected modal
    document.getElementById(id).classList.remove("invisible");
}

export { openModal }