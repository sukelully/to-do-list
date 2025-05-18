class Task {
    constructor(task, description, dueDate, priority=0) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}

export { Task };
