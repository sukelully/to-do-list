class Project {
  name: string;
  tasksArray: Task[];
  id: string;

  constructor(name: string, tasksArray: Task[] = []) {
    this.name = name;
    this.tasksArray = tasksArray;
    this.id = crypto.randomUUID();
  }
}

class Task {
  task: string;
  description: string | null;
  dueDate: Date | string | null;
  priority: number | null;
  id: string;

  constructor(
    task: string,
    description: string | null = null,
    dueDate: Date | string | null = null,
    priority: number | null = null
  ) {
    this.task = task;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
}

export { Project, Task };
