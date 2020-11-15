//jsnack 1
//Partendo da un array semplice tipo:

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min;
let max;
do{
  min = parseInt(prompt('Inserisci un numero compreso tra 0 e 5'));
  max = parseInt(prompt('Inserisci un numero compreso tra 0 e 5'));
} while (min > max);

// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// var mysecondArray = ['A', 'B', 'C', 'D', 'E'];
// // var selezione = mysecondArray.slice(1, 4);
// // console.log(selezione);
// var domandaUno;
// var domandaDue;
// // do{
// domandaUno = prompt("UNO: inserisci un numero tra 0 e " + mysecondArray.length);
// domandaDue = prompt("DUE: inserisci un numero tra 0 e " + mysecondArray.length);
// // } while(isNan(domandaUno) || isNan(domandaDue) || domandaDue < domandaUno)
//
// var result = mysecondArray.slice(domandaUno, domandaDue);
// console.log(result);

// con il for each
const newArray = []
myArray.forEach((element, index) => {
  if (min <= index && max >= index) {
    newArray.push(element);
  }
});

console.log(newArray);
