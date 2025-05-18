class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.prority = priority;
        this.id = crypto.randomUUID();
    }
}

export { Task };