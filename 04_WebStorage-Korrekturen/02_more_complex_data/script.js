const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

// localStorage Helper-Funktionen für Serialisierung/Deserialisierung
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []; // JSON zu JS-Objekt, fallback: leeres Array
const writeToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data)); // JS-Objekt zu JSON-String

const createLi = (task) => {
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

const handleFormSubmit = (e) => {
  e.preventDefault(); // Standard-Formular-Submit verhindern
  const inputVal = userInput.value.trim();

  // Validierung: leere Eingabe verhindern
  if (!inputVal) {
    alert('Input field cannot be empty');
    return;
  }

  // Neue Task-Objekt erstellen
  const newTask = {
    content: inputVal,
    id: 'task-' + crypto.randomUUID().replaceAll('-', ''), // Eindeutige ID generieren
  };

  // Tasks aus localStorage holen
  const tasks = getFromStorage('tasks');

  // const updatedTasks = tasks.push(newTask) // mutiert ursprüngliches Array
  const updatedTasks = [...tasks, newTask]; //  Spread-Operator: neues Array mit allen alten + neuer Task

  // Aktualisierte Tasks in localStorage speichern
  writeToStorage('tasks', updatedTasks);

  // DOM aktualisieren
  createLi(newTask);

  form.reset(); // Formular zurücksetzen
};

const renderStorage = () => {
  // Beim Laden der Seite: alle gespeicherten Tasks aus localStorage anzeigen
  const fromLocalStorage = getFromStorage('tasks');
  fromLocalStorage.forEach((element) => createLi(element)); // Für jede Task ein DOM-Element erstellen
};

// Event Listener registrieren
form.addEventListener('submit', handleFormSubmit);
window.addEventListener('load', renderStorage); // Beim Laden der Seite Tasks anzeigen
