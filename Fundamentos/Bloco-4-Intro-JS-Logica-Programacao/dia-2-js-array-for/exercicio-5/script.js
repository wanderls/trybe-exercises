// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = Math.max.apply(null, numbers);

console.log("O maior numero é: " + maiorNumero);