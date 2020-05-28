// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const exercise1 = require('./exercise1');

test('Verificação 1', () => {
  exercise1.randomNumber = jest
  .fn()
  .mockReturnValue(10);
  
  exercise1.randomNumber();
  expect(exercise1.randomNumber()).toBe(10);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(2);
});