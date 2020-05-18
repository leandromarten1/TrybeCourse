const myFizzBuzz = require('../exercise6');

test('verifica se o numero é divisivel por 3 e 5', () => {
});
expect(myFizzBuzz(15)).toBe('fizzbuzz');

test('verifica se o numero é divisivel por 3', () => {
});
expect(myFizzBuzz(21)).toBe('fizz');

test('verifica se o numero é divisivel por 5', () => {
  expect(myFizzBuzz(25)).toBe('buzz');
});

test('verifica se o numero não é divisivel por 3 ou 5', () => {
  expect(myFizzBuzz(22)).toBe(22);
});