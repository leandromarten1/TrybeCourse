// Ainda com a mesma função do primeiro exercício, utilizando o mock, cria uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que recebe um parâmetro e retorne seu dobro. Faça os testes necessários.

const exercise3 = require('./exercise1');

test('Alterando a implementação (a * b * c)', () => {
  exercise3.randomNumber = jest
  .fn()
  .mockImplementation((a, b, c) => a * (b * c));

  exercise3.randomNumber(3, 2, 5);
  expect(exercise3.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise3.randomNumber(3, 2, 5)).toBe(30);
  expect(exercise3.randomNumber).toHaveBeenCalledWith(3, 2, 5);

  exercise3.randomNumber.mockRestore(); // resetando a implementação
});

test('Outra implementação (a * 2)', () => {
  exercise3.randomNumber = jest
  .fn()
  .mockImplementation((a) => a * 2);

  exercise3.randomNumber(5);
  expect(exercise3.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise3.randomNumber(5)).toBe(10);
  expect(exercise3.randomNumber).toHaveBeenCalledWith(5);


});