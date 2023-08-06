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

// Handle touch events for mobile devices
container.addEventListener('touchstart', (e) => {
  e.preventDefault();
});

container.addEventListener('touchend', (e) => {
  if (draggedItem) {
    container.appendChild(draggedItem);
    draggedItem = null;
  }
});




// const draggables = document.querySelectorAll(".task");
// const droppables = document.querySelectorAll(".swim-lane");

// draggables.forEach((task) => {
//   task.addEventListener("dragstart", () => {
//     task.classList.add("is-dragging");
//   });
//   task.addEventListener("dragend", () => {
//     task.classList.remove("is-dragging");
//   });
// });

// droppables.forEach((zone) => {
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();

//     const bottomTask = insertAboveTask(zone, e.clientY);
//     const curTask = document.querySelector(".is-dragging");

//     if (!bottomTask) {
//       zone.appendChild(curTask);
//     } else {
//       zone.insertBefore(curTask, bottomTask);
//     }
//   });
// });

// const insertAboveTask = (zone, mouseY) => {
//   const els = zone.querySelectorAll(".task:not(.is-dragging)");

//   let closestTask = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;

//   els.forEach((task) => {
//     const { top } = task.getBoundingClientRect();

//     const offset = mouseY - top;

//     if (offset < 0 && offset > closestOffset) {
//       closestOffset = offset;
//       closestTask = task;
//     }
//   });

//   return closestTask;
// };