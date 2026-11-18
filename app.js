// Renders the task list. Tasks are plain objects: { title, done }.
import { loadTasks } from './api.js';

const list = document.querySelector('#tasks');
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

loadTasks()
  .then((initial) => tasks.push(...initial))
  .catch((error) => {
    list.textContent = error.message;
  })
  .finally(render);
