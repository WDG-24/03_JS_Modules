import { getFromStorage, writeToStorage } from './utils.js';

const ul = document.querySelector('ul');

const createLi = (task) => {
  // export default function createLi  (task) {
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.setAttribute('id', task.id);
  newLi.className = 'flex gap-4 items-baseline px-4 justify-between';

  newP.textContent = task.content;

  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded';

  // Event Listener mit { once: true } - wird automatisch nach erstem Auslösen entfernt
  deleteBtn.addEventListener(
    'click',
    () => {
      // Task aus localStorage entfernen
      const tasks = getFromStorage('tasks');
      const updatedTasks = tasks.filter((t) => t.id !== task.id); // Immutable: neues Array ohne gelöschte Task
      writeToStorage('tasks', updatedTasks);
      newLi.remove(); // DOM-Element entfernen
    },
    { once: true } // Event Listener wird nach einmaligem Auslösen automatisch entfernt
  );

  // DOM zusammenbauen und zur Liste hinzufügen
  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);
  ul.prepend(newLi); // Am Anfang der Liste einfügen
};

const add = (a, b) => a + b;

const fetchSth = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default createLi;
export { add, fetchSth };
