const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

//  É esperado que o resultado conteudo do array seja 1, 3, 4
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3), [1,2,4]);

// Se dois objetos, e seus objetos filhos, forem iguais (em valores e tipos), um erro é lançado e o programa é encerrado:
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 4), [1, 2, 3, 4]);

const novoArray = [1, 2, 3, 4];
myRemoveWithoutCopy(novoArray, 1);
// É esperado que tamanho do novoArray seja 3
assert.strictEqual(novoArray.length, 3);

// É esperado que o resultado conteudo do array seja 1, 2, 3, 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
