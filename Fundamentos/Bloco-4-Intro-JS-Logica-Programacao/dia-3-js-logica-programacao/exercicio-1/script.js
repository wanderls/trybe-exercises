// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let armazem = '*';

if (n >= 1){
  for (let index = 0; index < n; index += 1){
    armazem += '*';
    
  }
  for (let index2 = 0; index2 < n; index2 += 1){
    console.log(armazem);
  }
} else {
  console.log('Numero invalido')
}

// Outra forma de fazer:
// let n = 5;
// for (index = 1; index <= n; index +=1){
//     console.log("*".repeat(n));
// }