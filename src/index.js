import "./styles.css";
import { greeting } from './greeting.js';
import { Task } from './task.js';

const taskTest = new Task('Do laundry', 'fold and do dishes', 21, 'high');

const updateGreeting = (function () {
    const greetingHeader = document.getElementById('greeting-header');
    greetingHeader.innerHTML = `${greeting}`;
})();

const updateTasks = (function () {
    const list = document.getElementById('task-test');

    Object.entries(taskTest).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        list.appendChild(li);
    });
})();


console.log(greeting);