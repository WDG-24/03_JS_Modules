let counter = 1;

const fetchPokemon = async (counter) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const data = await response.json();

    console.log('Pokemon name: ', data.name);
    console.log('Pokemon ID: ', data.id);
  } catch (error) {
    console.log(error);
  }
};

const intervalID = setInterval(() => {
  fetchPokemon(counter);
  counter++;
  if (counter > 15) clearInterval(intervalID);
}, 1000);

// // setTimeout(() => {
// //   clearInterval(intervalID);
// // }, 150_000);

// // let counter = 1;

// // const interval = setInterval(async () => {
// //   try {
// //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
// //     const data = await response.json();

// //     console.log({
// //       name: data.name,
// //       id: data.id,
// //     });
// //     counter++;
// //   } catch (error) {
// //     console.error('Fehler beim Abrufen:', error);
// //   }
// //   if (counter > 150) {
// //     clearInterval(interval);
// //     console.log('Alle 150 Original-Pokémon wurden geladen!');
// //   }
// // }, 1000);

// let counter = Math.floor(Math.random() * 1000) + 1;
// const showPokemon = (pokemon) => {
//   console.log(pokemon);
// };
// const fetchPokemon = async () => {
//   try {
//     console.log('try to fetch a pokemon...');
//     const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     const pokemon = {
//       name: data.name,
//       id: data.id,
//     };
//     showPokemon(pokemon);
//   } catch (error) {
//     console.log(error);
//   }
//   counter++;
// };
// const fiveRequests = () => {
//   fetchPokemon();
// };

// const intervalID = setInterval(fiveRequests, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);
