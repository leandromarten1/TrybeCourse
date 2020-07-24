const myIndexOf = require('../exercise2');

test('Testa se retorna o indice do elemento', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
});

test('Testa se retorna -1 o indice do elemento', () => {
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});