import './style.css';

// eslint-disable-next-line import/no-cycle
import { functions } from 'lodash';
import { statusUpdate } from './statusUpdate.js';
import { dragFunction } from './dragDropSort.js';

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

export const list = [];

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line import/no-mutable-exports
export let globalIndex = 1;

function buildToPush() {
  const getAdd = document.getElementById('getAdd');

  list.push({
    description: getAdd.value,
    completed: false,
    globalIndex,
  });

  globalIndex += 1;
}

function storeLocally() {
  const stringifyList = JSON.stringify(list[globalIndex - 2]);
  localStorage.setItem(globalIndex - 1, stringifyList);
}

export function resultFunction() {
  const result = list.filter((obj) => obj.globalIndex === globalIndex - 1)[0];
  return result;
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
