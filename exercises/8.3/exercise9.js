const assert = require('assert');

function change(param) {
  return !param;
}

// implemente seus testes aqui
// Utilize assert.ok() para testar uma condição

assert.ok(change(true) === false);