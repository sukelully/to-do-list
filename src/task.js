class Task {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.prority = priority;
        this.id = crypto.randomUUID();
    }
}

export { Task };
