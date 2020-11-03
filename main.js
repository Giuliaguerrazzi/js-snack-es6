// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

// creare array di oggetti
const biciclette = [

 {
  nome: 'Cinelli',
  peso: 10
 },
 {
  nome: 'Alan',
  peso: 5
 },
 {
   nome: 'Colnago',
   peso: 13
 }
];

// handlebars
// variabile per riferimento al template
// let source = $('#bike-template').html();
// let template = Handlebars.compile(source);

let biciLeggera = biciclette[0];

biciclette.forEach (element => {
  if (biciLeggera.peso > element.peso) {
    biciLeggera = element;
  }
});

console.log(biciLeggera);

const {nome, peso} = biciLeggera;
$('body').html(
  `<div>
  <h2> La bicicletta più leggera è: ${nome}</h2>
  <h2> Peso della bici è: ${peso}</h2>
  </div>
  `
);


// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
// const nameArray = ['Artemisia', 'Caravaggio', 'Vincent', 'Frida', 'Salvador', 'Claude'];
//
// let tot = nameArray.length - 1;
//
// // chiedere numeri all'utente
// let num1 = parseInt( prompt('Definisci posizione iniziale con numero da 0 a ' + tot));
// let num2 = parseInt( prompt('Definisci posizione finale con numero da 0 a ' + tot));
// let newArray = [];
//
// // nameArray.forEach((element, index) => {
// //   if (num1 <= index && num2 >= index) {
// //     newArray.push(element)
// //   }
// // });
//
// newArray = nameArray.filter((element, index) => {
//       return num1 <= index && num2 >= index
// });
//
// console.log(newArray);


// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

// const oggettiArray = [
//   {
//     nome: 'Artemisia',
//     colore: 'rosso',
//   },
//   {
//     nome: 'Caravaggio',
//     colore: 'blu',
//   },
//   {
//     nome: 'Frida',
//     colore: 'verde',
//   },
//   {
//     nome: 'Salvador',
//     colore: 'giallo',
//   }
// ];
//
//
// let newoggettiArray = [...oggettiArray].map(person => {
//   return {
//     ...person,
//     position: generatePosition()
//   }
// });
//

// for (var i = 0; i < oggettiArray.length; i++) {
//   var aggiungiOggetto = {
//     nome: oggettiArray[i].nome,
//     colore: oggettiArray[i].colore,
//     position: generatePosition()
//   }
//
//   newoggettiArray.push(aggiungiOggetto);
// }

// console.table(oggettiArray);
// console.table(newoggettiArray);
//
// // function
// // funzione che genera lettere random
// function generatePosition() {
//   var letters = 'abcdefghijklmnopqrstuvwxyz';
//
//   var letter = letters [randomNumber(0, letters.length - 1)];
//   return letter;
// }
//
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
