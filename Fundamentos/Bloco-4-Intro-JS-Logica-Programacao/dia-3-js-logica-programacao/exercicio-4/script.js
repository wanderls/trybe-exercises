// // Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let armazem = '';

if (n >= 1){
  for (let index = 1; index <= n; index += 2) {
    let armazem = '';
    for (let index2 = 0; index2 < Math.ceil((n - index) / 2); index2 += 1) {
      armazem += ' ';
    }
    for (let index3 = 0; index3 < index; index3 += 1) {
      armazem += '*';
    }
    console.log(armazem);
  }
} else {
  console.log('Numero invalido');
}