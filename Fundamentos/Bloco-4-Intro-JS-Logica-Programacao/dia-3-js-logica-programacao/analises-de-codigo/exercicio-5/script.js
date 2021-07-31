// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = Math.max.apply(null, numbers);

console.log("O maior numero é: " + maiorNumero);

// Eu resolvi o problema? Sim
// Havia outras maneiras de resolver o problema? Sim, criando vários For e IFs para comparar os valores dentro da Array numbers
// A maneira que eu escolhi foi a mais eficiente possível? Sim
// Seria possível inverter ou retirar algum passo? Não
// Se eu fosse um computador, conseguiria entender todas as intruções? Sim