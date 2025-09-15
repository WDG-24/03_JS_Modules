import './style.css';
import createLi, { add, fetchSth } from './ui.js';
import { getFromStorage, writeToStorage } from './utils.js';

const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const reloadBtn = document.querySelector('#reload');

console.log(form);

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
