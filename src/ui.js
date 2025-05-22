const createProjectElement = (projectName) => {
    const container = document.createElement("div");
    container.id = `${projectName}`;

    return container;
};
