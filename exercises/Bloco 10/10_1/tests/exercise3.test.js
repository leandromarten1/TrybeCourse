const mySum = require('../exercise3');

test('Verifica se retorna a soma de elementos de um array', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10);
  expect(mySum([-1, -2, -3, 4])).toBe(-2);
  expect(mySum([43, 7, 5, 80, 132])).toBe(267);
});