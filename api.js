// Fake backend: the initial tasks come from a static JSON file.
export async function loadTasks() {
  const response = await fetch('data/tasks.json');
  if (!response.ok) throw new Error(`Could not load tasks (HTTP ${response.status})`);
  return response.json();
}
