const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const juntArray = (array, contador) => array.concat(contador);
  const novoArray = arrays.reduce(juntArray);

  return novoArray;

}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
