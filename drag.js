const Tasks = document.querySelectorAll('.task');
const Lanes = document.querySelectorAll('.swim-lane');
let draggedItem = null;

Tasks.forEach(task => {
  task.addEventListener('dragstart', (e) => {
    draggedItem = task;
    setTimeout(() => {
      task.style.display = 'none';
    }, 0);
  });

  task.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });
});


Lanes.forEach(lane => {
  lane.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  lane.addEventListener('drop', (e) => {
    e.preventDefault();
    lane.appendChild(draggedItem);
  });
});