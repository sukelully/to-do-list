class Task {
    constructor(task, description=null, dueDate=null, priority=null) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}

export { Task };
