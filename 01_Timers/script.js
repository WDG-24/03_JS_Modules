let counter = 0;

// Code läuft synchron weiter - wird sofort ausgeführt
console.log('Vor dem Timeout im Code');

// setTimeout: Einmalige Ausführung nach 3 Sekunden
setTimeout(() => {
  console.log('Running after timeout');
}, 3000);

// Wird sofort ausgeführt, nicht nach dem Timeout!
console.log('Nach dem Timeout im Code');

// setInterval: Wiederholung alle 1000ms (1 Sekunde)
const intervalID = setInterval(() => {
  counter++;
  console.log(counter);
  console.log('Wieder eine Sekunde vergangen');
}, 1000);

// Nach 5 Sekunden: Interval stoppen
setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
