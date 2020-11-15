// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var bici =
[
  {
    'nome': 'bob',
    'peso': 11
  },
  {
    'nome': 'mark',
    'peso': 9
  },
  {
    'nome': 'tom',
    'peso': 8
  },
  {
    'nome': 'george',
    'peso': 11
  },
  {
    'nome': 'james',
    'peso': 12
  },
]


var piuLeggera = bici[0];

// alternativa col ciclo for
// for (var i = 0; i < bici.length; i++) {
//   if (bici[i].peso < piuLeggera.peso) {
//     piuLeggera = bici[i];
//   }
// }

// console.log(piuLeggera);

// alternativa col for each
bici.forEach((element) => {
  if(element.peso < piuLeggera.peso) {
    piuLeggera = element;
  }
});

console.log(piuLeggera);

// stampiamo a schermo il risultato
// const {peso, name} = biciLeggera;
// document.getElementById('container').innerHTML =
// `<ul>
// <li>Nome: ${name}</li>
// <li>Peso: ${peso}</li>
// </ul>`;









// var lowest = Number.POSITIVE_INFINITY;
// var highest = Number.NEGATIVE_INFINITY;
// var tmp;
// for (var i= bici.length -1; i>=0; i--) {
//     tmp = bici[i].peso;
//     if (tmp < lowest) lowest = tmp;
//     if (tmp > highest) highest = tmp;
// }
// console.log(lowest);


  // console.log(bici[2].nome);
  // console.log(bici[2].peso);
