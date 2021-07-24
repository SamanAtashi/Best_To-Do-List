/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle
import { list } from './index.js';

export function statusUpdate(theItem) {
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
