// Alle localStorage Daten löschen
localStorage.clear();

// Einfachen Wert speichern (wird automatisch zu String konvertiert)
localStorage.setItem('myNumber', 123);

// Wert aus localStorage abrufen (immer als String!)
const data = localStorage.getItem('myNumber');
console.log(123); // Zahl: 123
console.log(typeof data); // String: "123"

// ❌ Objekte direkt speichern funktioniert NICHT
// localStorage.setItem('myObject', { hello: 'world' }); -> [object Object]
// console.log(`${{ hello: 'world' }}`);

// Beispiel-Objekt mit verschiedenen Datentypen
const myObj = {
  hello: 'world',
  num: 42,
  myMethod() {
    return 'Hello';
  },
};

// ✅ Objekt zu JSON-String serialisieren
const serializedObj = JSON.stringify(myObj);

// Serialisiertes Objekt speichern
localStorage.setItem('myObject', serializedObj);

// console.log(serializedObj);

// Objekt aus localStorage abrufen (noch als JSON-String)
const objFromLS = localStorage.getItem('myObject');
console.log(objFromLS);

// JSON-String zurück zu Objekt parsen
console.log(JSON.parse(objFromLS));

// sessionStorage funktioniert genauso, nur für aktuelle Session
sessionStorage.setItem('myNum', 123);
