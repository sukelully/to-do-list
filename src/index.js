import "./styles.css";
import { Task } from "./task.js";
import { initSidebar } from "./ui/sidebar.js";
import { initDropdown } from "./ui/dropdown.js";
import { displayTasks } from "./ui/taskElement.js";
import { initTaskForm } from "./ui/taskForm.js";

const tasksArray = [];
const taskTest = new Task(
    "Do laundry",
    "fold and do dishes",
    new Date(2025, 5, 24),
    3);

const taskTest2 = new Task(
    "Do dishes",
    "Walk dog idk",
    new Date(2024, 6, 13),
    2);

tasksArray.push(taskTest);
tasksArray.push(taskTest2);

displayTasks(tasksArray);

initSidebar();
initDropdown();
initTaskForm(tasksArray);
