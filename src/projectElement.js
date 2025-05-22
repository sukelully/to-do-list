const createProjectElement = (projectName) => {
    const container = document.createElement("div");
    container.id = `${projectName}`;
    container.textContent = `${projectName}`;

    return container;
};

export { createProjectElement }
