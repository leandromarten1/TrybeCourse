const sum = require('../exercise1');

test('Soma de 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Soma de 0s é 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('throws on octopus', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

test('throws on octopus', () => {
  expect(() => {
    sum(4, '5');
  }).toThrowError(/^parameters must be numbers$/);
});
