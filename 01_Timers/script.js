let counter = 0;
console.log('Vor dem Timeout im Code');

setTimeout(() => {
  console.log('Running after timeout');
}, 3000);

console.log('Nach dem Timeout im Code');

const intervalID = setInterval(() => {
  counter++;
  console.log(counter);
  console.log('Wieder eine Sekunde vergangen');
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
