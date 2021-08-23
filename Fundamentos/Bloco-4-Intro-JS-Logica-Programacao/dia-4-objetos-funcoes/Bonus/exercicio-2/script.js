// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for , percorra essa variável, busque os números pares e os adicione
// a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[2, 3, 4, 5], [1,2,4,2,6], [1,2,8,2,10]];

function arrayOfNumbers (vector){
  let novoArray = [];
  for (let index = 0; index < vector.length; index += 1){
    let numVet = vector[index];
    for (let index2 = 0; index2 < numVet.length; index2 += 1){
      // let numAtual = numVet[index2];
      if (numVet[index2] % 2 === 0){
        novoArray.push(numAtual);
      }
    }
  }
  return novoArray;
}
console.log(arrayOfNumbers(vector));

// Utilizando um Array

// let array1 = [2,4,5,6,7,8,9];
// let array2 = [];

// for (index2 = 0; index2 < array1.length; index2 += 1){
//   if (array1[index2] % 2 === 0){
//     array2.push(array1[index2]);
//   }
// }

// console.log(array2);