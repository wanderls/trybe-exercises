const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// É esperado que o conteudo do obj1 seja igual ao do obj3
assert.deepStrictEqual(obj1, obj2);

// É esperado que o conteudo dos dois objetos não sejam iguais
assert.notDeepStrictEqual(obj1, obj3);

// É esperado que o conteudo dos dois objetos não sejam iguais
assert.notDeepStrictEqual(obj2, obj3);
