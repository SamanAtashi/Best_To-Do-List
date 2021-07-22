// eslint-disable-next-line import/no-cycle
import { globalIndex, list } from './index.js';

// eslint-disable-next-line import/prefer-default-export
export function buildToPush() {
  const getAdd = document.getElementById('getAdd');

  list.push({
    description: getAdd.value,
    completed: false,
    globalIndex,
  });

  getAdd.value = '';

  globalIndex += 1;
}
