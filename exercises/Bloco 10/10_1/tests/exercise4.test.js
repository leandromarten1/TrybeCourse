const myRemove = require('../exercise4');

it('Verifica se recebe array e remove o item', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
});
