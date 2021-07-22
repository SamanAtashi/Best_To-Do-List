import './style.css';

// eslint-disable-next-line import/no-cycle
import { statusUpdate } from './statusUpdate.js';
import { dragFunction } from './dragDropSort.js';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-cycle
import { buildToPush } from './CRUD.js';

function buildElementandShow() {
  const getAdd = document.getElementById('getAdd'); // grab input text
  const show = document.getElementById('show'); // grab ul

  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.classList.add('d-flex');

  // draggable
  createLi.setAttribute('draggable', 'true');

  const createCheckBox = document.createElement('input');
  createCheckBox.type = 'checkbox';
  createCheckBox.name = 'checkbox';
  // eslint-disable-next-line no-use-before-define
  createCheckBox.id = `item${globalIndex}`;

  createCheckBox.classList.add('space-right');
  createCheckBox.classList.add('checked');

  const createLabel = document.createElement('label');
  createLabel.htmlFor = 'checked';
  createLabel.classList.add('label');
  createLabel.appendChild(document.createTextNode(getAdd.value));

  const createDiv = document.createElement('div');
  createDiv.classList.add('itemContent');
  createDiv.classList.add('d-flex');

  const createDragIcon = document.createElement('i');
  createDragIcon.classList.add('fas');
  createDragIcon.classList.add('fa-ellipsis-v');

  show.appendChild(createLi);
  createDiv.appendChild(createCheckBox);
  createDiv.appendChild(createLabel);
  createLi.appendChild(createDiv);
  createLi.appendChild(createDragIcon);
}

// eslint-disable-next-line import/no-mutable-exports
export let list = [];

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line import/no-mutable-exports
export let globalIndex = 1;

function storeLocally() {
  const stringifyList = JSON.stringify(list[globalIndex - 2]);
  localStorage.setItem(globalIndex - 1, stringifyList);
}

document.getElementById('getAdd').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    buildElementandShow();
    buildToPush();
    storeLocally();
    dragFunction();
  }
});

document.getElementById('getAdd-btn').addEventListener('click', () => {
  buildElementandShow();
  buildToPush();
  storeLocally();
  dragFunction();
});

// ONLY when click on checkbox it will update the "completed" value
document.addEventListener('click', (e) => {
  if (/item[0-9]+/g.test(e.target.id)) {
    if (list.length > 0) {
      statusUpdate(e.target);
    }
  }
});

function createDeleteBtn() {
  const createDeleteBtn = document.createElement('input');
  createDeleteBtn.value = 'Delete';
  createDeleteBtn.type = 'button';
  createDeleteBtn.name = 'delBtn';
  createDeleteBtn.classList.add('dynamicDeleteBtn');
  return createDeleteBtn;
}

document.addEventListener('dblclick', (e) => {
  // only when click on icon
  if (e.target.classList.value === 'fas fa-ellipsis-v') {
    const previous = e.target.previousSibling;
    const parent = e.target.parentElement;
    const { firstChild } = parent;

    // add redness
    if (parent.classList.value === 'item d-flex red') {
      parent.classList.remove('red');
    } else {
      parent.classList.add('red');
    }

    if (parent.classList.value === 'item d-flex red') {
      firstChild.classList.add('d-none');
    } else {
      firstChild.classList.remove('d-none');
    }

    if (parent.classList.value === 'item d-flex red') {
      parent.insertBefore(createDeleteBtn(), e.target);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (previous.classList.value === 'dynamicDeleteBtn') {
        previous.remove();
      }
    }
  }
});

document.getElementById('clearAllComp').addEventListener('click', () => {
  const checked = document.querySelectorAll('.checked');
  checked.forEach((task) => {
    if (task.checked) {
      task.parentElement.parentElement.classList.add('d-none');
    }
  });
  if (list.length > 0) {
    // eslint-disable-next-line eqeqeq
    const trueFilter = list.filter((task) => Boolean(task.completed) == Boolean(false));
    list = trueFilter;
  }
});
