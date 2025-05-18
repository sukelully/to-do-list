import "./styles.css";
import { Task } from "./task.js";

const tasksArray = [];
const taskTest = new Task("Do laundry", "fold and do dishes", 21, "high");

tasksArray.push(taskTest);

const displayTasks = (function () {
    for (const task of tasksArray) {
        const list = document.getElementById("task-test");

        Object.entries(task).forEach(([key, value]) => {
            const li = document.createElement("li");
            li.textContent = `${key}: ${value}`;
            list.appendChild(li);
        });
    }
})();
