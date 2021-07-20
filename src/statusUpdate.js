/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle
import { list } from './index.js';

// eslint-disable-next-line import/prefer-default-export

export function statusUpdate(theItem) {
  const theId = parseInt(theItem.id.match(/\d+/g)[0], 10);

  if (list[theId - 1].completed === false) {
    list[theId - 1].completed = true;
  } else {
    list[theId - 1].completed = false;
  }
  localStorage.setItem(theId, JSON.stringify(list[theId - 1]));
}
