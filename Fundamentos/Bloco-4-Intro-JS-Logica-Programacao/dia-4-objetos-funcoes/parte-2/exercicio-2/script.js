// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numeros = [2, 3, 6, 7, 10, 1];

function numMaior (numeros){  
  return Math.max.apply(null, numeros );
}

console.log('O maior numero é: ' + numMaior(numeros));