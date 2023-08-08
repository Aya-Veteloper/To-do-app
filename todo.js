const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.draggable = true;
  newTask.innerText = value;

  newTask.addEventListener('dragstart', (e) => {
    draggedItem = newTask;
    setTimeout(() => {
      newTask.style.display = 'none';
    }, 0);
  });

  newTask.addEventListener('dragend', () => {
    setTimeout(() => {
      newTask.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  todoLane.appendChild(newTask);

  input.value = "";
});