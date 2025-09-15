// localStorage Helper-Funktionen für Serialisierung/Deserialisierung
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []; // JSON zu JS-Objekt, fallback: leeres Array
const writeToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data)); // JS-Objekt zu JSON-String

export { getFromStorage, writeToStorage };
