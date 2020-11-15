// Creare un oggetto palla con le seguenti proprietà
// nome=palla
// peso=10


var palla = {
  "nome": "palla",
  "peso": "10"
};
console.log(palla);


// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
// 10:31 consegna

var modifica = prompt("inserisci il peso");
palla.peso = modifica;

console.log(palla);
