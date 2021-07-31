// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

let n = 7;
let armazem = '';

if (n >= 1){
  for (let index = 1; index <= n; index += 2) {
    armazem = '';
    for (let index2 = 0; index2 < Math.ceil((n - index) / 2); index2 += 1) {
      armazem += ' ';
    }
    for (let index3 = 0; index3 < index; index3 += 1) {
      if (index3 === 0 || index3 === index - 1 || index === n) {
        armazem += '*';
      } else {
        armazem += ' ';
      }
    }
    console.log(armazem);
  }
} else {
  console.log('Numero invalido');
}