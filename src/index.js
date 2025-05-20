import "./styles.css";
import { Task } from "./task.js";
import * as ui from "./ui.js";

ui.initSidebar();
ui.initDropdown();
ui.displayContent();

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

ui.displayTasks(tasksArray);

const addTaskListener = (function () {
    const form = document.getElementById("add-task-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const task = {};

        formData.forEach((value, key) => {
            task[key] = value;
        });

        tasksArray.push(new Task(task.name, task.description, new Date(task.date), task.priority));
        ui.displayTasks(tasksArray);

        document.getElementById("add-task-modal").classList.toggle("hidden");
    });
})();
