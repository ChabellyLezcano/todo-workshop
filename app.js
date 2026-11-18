// Renders the task list. Tasks are plain objects: { title, done }.
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

render();
