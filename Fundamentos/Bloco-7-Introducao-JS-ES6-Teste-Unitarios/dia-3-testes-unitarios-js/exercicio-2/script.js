const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// verifica se os filhos são iguais
assert.deepStrictEqual(myRemove([1,2,3,4],3), [1,2,4]);

// Se dois objetos, e seus objetos filhos, forem iguais (em valores e tipos), um erro é lançado e o programa é encerrado:
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// verifica se os filhos são iguais
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4]);
