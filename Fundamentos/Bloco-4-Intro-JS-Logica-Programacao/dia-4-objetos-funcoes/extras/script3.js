// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo.

let n1 = 23;
let n2 = 21;

// Função Somar
function soma(num1, num2) {
  return num1 + num2;
}

console.log(n1 + " + " + n2 + " = " + soma(n1, n2));


// Função subtração
function subtracao(num1, num2) {
  return num1 - num2;
}

console.log(n1 + " - " + n2 + " = " + subtracao(n1, n2));

// Função Multiplicação
function multiplicacao(num1, num2) {
  return num1 * num2;
}

console.log(n1 + " * " + n2 + " = " + multiplicacao(n1, n2));


// Função Divisão
function divisao(num1, num2) {
  return num1 / num2;
}

console.log(n1 + " / " + n2 + " = " + divisao(n1, n2));


// Função Modulo
function modResto(num1, num2) {
  return num1 % num2;
}

console.log(n1 + " % " + n2 + " = " + modResto(n1, n2));