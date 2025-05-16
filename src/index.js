import "./styles.css";
import { greeting } from './greeting.js';

const updateGreeting = (function () {
    const greetingHeader = document.getElementById('greeting-header');
    greetingHeader.innerHTML = `${greeting}`;
})();


console.log(greeting);