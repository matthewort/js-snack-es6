
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25

var squadre =
[
  {
    'nome': 'inter',
    'puntifatti': 0,
    'fallisubiti': 0
  },
  {
    'nome': 'milan',
    'puntifatti': 0,
    'fallisubiti': 0
  },
  {
    'nome': 'juventus',
    'puntifatti': 0,
    'fallisubiti': 0
  },
  {
    'nome': 'atalanta',
    'puntifatti': 0,
    'fallisubiti': 0
  },
  {
    'nome': 'cheslea',
    'puntifatti': 0,
    'fallisubiti': 0
  }
];

// squadre.push({
//     "puntifatti": randomUno,
//     "fallisubiti": randomDue,
// });

// perché non va bene il push?

for (var i = 0; i < squadre.length; i++) {

    var randomUno = Math.floor(Math.random() * 100);
    var randomDue = Math.floor(Math.random() * 100);

    if (squadre[i].puntifatti === 0) {
        squadre[i].puntifatti = randomUno;
    }

    if (squadre[i].fallisubiti === 0) {
        squadre[i].fallisubiti = randomDue;
    }
};

console.log(squadre);
