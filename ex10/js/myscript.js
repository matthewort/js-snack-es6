//jsnack 2
// dato questo array di obj iniziale:

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

const myarray = ["A", "B", "C", "D"]

const arrayObjDue = myarray.map((item) => {
  return {...item, position: myarray[Math.floor(Math.random() * myarray.length)]}
});
console.log(arrayObj);
console.log(arrayObjDue);
