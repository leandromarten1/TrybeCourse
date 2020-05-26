// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const exercise2 = require('./exercise1');

test('Testando nova implemetação', () => {
  exercise2.randomNumber = jest
  .fn()
  .mockImplementation((x, y) => x / y);

  expect(exercise2.randomNumber(10, 2)).toBe(5);
  expect(exercise2.randomNumber).toHaveBeenCalledTimes(1);
});