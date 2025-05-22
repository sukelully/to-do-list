class Project {
    constructor(name, tasksArray) {
        this.name = name;
        this.tasksArray = tasksArray;
        this.id = crypto.randomUUID();
    }
}

class Task {
    constructor(task, description=null, dueDate=null, priority=null) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}

export { Project, Task }
