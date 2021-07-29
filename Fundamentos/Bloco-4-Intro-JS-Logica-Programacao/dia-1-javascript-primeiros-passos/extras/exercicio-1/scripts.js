// let = tipo de variavel, pode ser alterado o valor durante a excução do código
// const = tipo de variavel, não pode ser alterado o valor durante a excução do código
// console = exibe na tela

// Regras criação de variaveis: não pode começar com numeros, não conter espaços
// Case Sensitive importa

const myName = "Wander";
const birthCity = "Santa Rosa de Viterbo/SP";
let birthYear = 1987;

console.log("Meu nome é: " + myName);
console.log("Minha idade: " + birthCity);
console.log("Ano de nascimento: " + birthYear);
birthYear = 2030;
console.log("Ano de nascimento: " + birthYear);
birthCity = "Cajuru";
// console.log("Ano de nascimento: " + birthCity; Gera um erro no compilador pois foi atribuido um novo valor a uma variavel constante