const assert = require('assert');

// escreva greet abaixo
const greet = (name, saudacao = 'Hi') => `${saudacao} ${name}`;

console.log(greet('Wander', 'Olá'))

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
