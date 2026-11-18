// Renders the task list. Tasks are plain objects: { title, done }.
import { loadTasks } from './api.js';

const list = document.querySelector('#tasks');
const form = document.querySelector('#new-task');
const tasks = [];

function render() {
  list.replaceChildren(
    ...tasks.map((task) => {
      const item = document.createElement('li');
      item.textContent = task.title;
      return item;
    }),
  );
}

function addTask(event) {
  event.preventDefault();
  const input = form.elements.title;
  tasks.push({ title: input.value, done: false });
  input.value = '';
  input.focus();
  render();
}

form.addEventListener('submit', addTask);

loadTasks()
  .then((initial) => tasks.push(...initial))
  .catch((error) => {
    list.textContent = error.message;
  })
  .finally(render);
