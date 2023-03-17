/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// creo le variabili per il container e il bottone
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// aggiungo un event listener al pulsante questo event listener deve far partire una funzione che genererà una lista 
btn.addEventListener('click', function() {
  container.innerHTML = ''; //per svuotare il container
  const grid = createGrid(10); //questa sarà la mia funzione che crea la griglia
  container.appendChild(grid); //per mettere la griglia dentro il container
});

// ora mi serve la funzione createGrid, questa funzione deve generare nel container una griglia X^2 >(devo poter scegliere il valore della X)

