const assert = require('assert');

// escreva sum abaixo
const sum = (...param) => param.reduce((total, numero) => total + numero, 0);

console.log(sum());

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);