const myRemoveWithoutCopy = require('../exercise5');

it('Retorna o array sem o item passado', () => {
  const array = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy(array, 3)).toStrictEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy(array, 3)).not.toStrictEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy(array, 2)).toStrictEqual(array); // array modificado [1, 3, 4]
  expect(myRemoveWithoutCopy(array, 5)).toStrictEqual(array);
});