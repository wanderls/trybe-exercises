// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let numero = 5;

function somaTudo(numero){
  let soma = 0;
  for (let cont = 1; cont <= numero; cont += 1){
    soma = soma + cont;
  }
  return soma
}
console.log(somaTudo(numero));