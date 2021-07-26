import './style.css';
import { dragFunction } from './dragDropSort.js';

// eslint-disable-next-line import/no-mutable-exports
export let list = [];
// eslint-disable-next-line import/no-mutable-exports
export let globalIndex = list.length + 1;

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

  // eslint-disable-next-line eqeqeq
  if (localStorage.length != 0) {
    globalIndex = list.length + 1;
    // globalIndex = localStorage.length;
  }
  createCheckBox.id = `item${globalIndex}`; // ? ===================

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

function pushToArray() {
  const getAdd = document.getElementById('getAdd');

  list.push({
    description: getAdd.value,
    completed: false,
    globalIndex,
  });

  getAdd.value = '';

  globalIndex += 1;
}

function storeLocally() {
  list.forEach((task) => {
    localStorage.setItem(globalIndex - 1, JSON.stringify(task));
  });
}

function checkboxUpdator(theItem) {
  const theId = parseInt(theItem.id.match(/\d+/g)[0], 10);
  // todo====================================== update array
  if (list[theId - 1].completed === false) {
    list[theId - 1].completed = true;
  } else {
    list[theId - 1].completed = false;
  }
  // todo====================================== update local storage
  localStorage.setItem(theId, JSON.stringify(list[theId - 1]));
}

function createDeleteBtn() {
  const createDeleteBtn = document.createElement('input');
  createDeleteBtn.value = 'Delete';
  createDeleteBtn.type = 'button';
  createDeleteBtn.name = 'delBtn';
  createDeleteBtn.classList.add('dynamicDeleteBtn');
  return createDeleteBtn;
}

function updateLocalStorage() {
  // console.log(globalIndex); // 2
  if (list.length > 0) {
    list.forEach((task) => {
      // eslint-disable-next-line prefer-const
      let key = task.globalIndex;
      localStorage.setItem(key, JSON.stringify(task));
    });
  } else {
    localStorage.clear();
  }
}

// Todo:------------------------------ start from scratch with NO LocalStorage

document.getElementById('getAdd').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    buildElementandShow(); // make it
    pushToArray(); // push it to array
    storeLocally(); // save array to localstorage
    dragFunction(); // drag functionality
  }
});

document.getElementById('getAdd-btn').addEventListener('click', () => {
  buildElementandShow(); // make it
  pushToArray(); // push it to array
  storeLocally(); // save array to localstorage
  dragFunction(); // drag functionality
});

// ONLY when click on checkbox it will update the "completed" value
document.addEventListener('click', (e) => {
  if (/item[0-9]+/g.test(e.target.id)) {
    checkboxUpdator(e.target);
  }
});

// dbclick ==> red + hide + add delBtn
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
    // when it is red ==> hide main content
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

// click on del btn ==> from html / from array / from localstorage(update)
document.addEventListener('click', (e) => {
  if (e.target.classList.value === 'dynamicDeleteBtn') {
    const currentKey = +e.target.previousSibling.firstChild.id.match(/[0-9]+/g)[0];

    // delete from list
    // eslint-disable-next-line eqeqeq
    list = list.filter((task) => task.globalIndex != currentKey);

    // delete the whole element in HTML
    e.target.parentElement.remove();

    // UPDATE Array
    for (let i = 0; i < list.length; i += 1) {
      list[i].globalIndex = i + 1;
    }

    // update id of each element
    const tempGrab = document.querySelectorAll('.checked');
    for (let i = 0; i < tempGrab.length; i += 1) {
      tempGrab[i].id = `item${i + 1}`;
    }

    // UPDATE(+delete) Local Storage
    localStorage.clear();
    updateLocalStorage();
  }
});

// Todo:------------------------------ start with LocalStorage

function buildElementandShow2(task) {
  const show = document.getElementById('show'); // grab ul

  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.classList.add('d-flex');

  // draggable
  createLi.setAttribute('draggable', 'true');

  const createCheckBox = document.createElement('input');
  createCheckBox.type = 'checkbox';
  createCheckBox.name = 'checkbox';

  // eslint-disable-next-line eqeqeq
  if (localStorage.length != 0) {
    globalIndex = list.length + 1;
    // globalIndex = localStorage.length;
  }
  createCheckBox.id = `item${task.globalIndex}`;
  if (task.completed) {
    createCheckBox.checked = 'checked';
  }

  createCheckBox.classList.add('space-right');
  createCheckBox.classList.add('checked');

  const createLabel = document.createElement('label');
  createLabel.htmlFor = 'checked';
  createLabel.classList.add('label');
  createLabel.appendChild(document.createTextNode(task.description));

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

function pushToArray2(task) {
  list.push({
    description: task.description,
    completed: task.completed,
    globalIndex: task.globalIndex,
  });

  //   globalIndex += 1;
}

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i += 1) {
    const task = JSON.parse(localStorage.getItem(i + 1));
    buildElementandShow2(task);
    pushToArray2(task);
  }
}

// todo: ----------------- clear all compeleted btn

document.getElementById('clearAllComp').addEventListener('click', () => {
  // delete from array
  const removeChecked = list.filter((task) => task.completed === false);
  list = removeChecked;

  // update array
  for (let i = 0; i < list.length; i += 1) {
    list[i].globalIndex = i + 1;
  }

  // delete from local storage
  localStorage.clear();
  updateLocalStorage();

  // delete html
  const checked = document.querySelectorAll('.checked');
  checked.forEach((task) => {
    if (task.checked) {
      task.parentElement.parentElement.remove();
    }
  });
});
