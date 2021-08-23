// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numRepete = [2, 3, 2, 5, 8, 2, 3];

function maisRepete (numRepete){
  numeRepete = 0;
  vezesRepete = 0;

  for (let index in numRepete){
    let numero = numRepete[index];
    let repete = 0;

    for (let index2 in numRepete){
      if (numero === numRepete[index2]){
        repete += 1;
      }
    }
    if (repete > vezesRepete){
      numeRepete = numero;
      vezesRepete = repete;
    }
  }
  return numeRepete
}
console.log(maisRepete(numRepete));