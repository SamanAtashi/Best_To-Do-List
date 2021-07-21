// eslint-disable-next-line import/prefer-default-export
export function dragFunction() {
  const draggables = document.querySelectorAll('.item');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  // grab conrainer
  const container = document.getElementById('show');
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    const afterElement = getDragAfterElement(container, e.clientY);
    const currentDragging = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(currentDragging);
    } else {
      container.insertBefore(currentDragging, afterElement);
    }
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  ).element;
}
