// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numeros = [2, 4, 6, 7, 10, 0, -3];

function numMenor (numeros){  
  return Math.min.apply(null, numeros );
}

console.log('O menor numero é: ' + numMenor(numeros));