// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const func = require('./myfunctions');
jest.mock('./myfunctions');

test('Nova implementação para convertToUpperCase - retornar caixa baixa', () => {
  func.convertToUpperCase.mockImplementation((string) => string.toLowerCase());
  func.convertToUpperCase('SHOW MAN');

  expect(func.convertToUpperCase).toHaveBeenCalled();
  expect(func.convertToUpperCase('SHOW MAN')).toEqual('show man');
  expect(func.convertToUpperCase).toHaveBeenCalledTimes(2);
});

test('Nova implementação para firstLetter - Retornar a Ultima Letra', () => {
  func.firstLetter.mockImplementation((str) => str.substr(str.length - 1));
  func.firstLetter('fetchWork');

  expect(func.firstLetter).toHaveBeenCalled();
  expect(func.firstLetter('fetchWork')).toEqual('k');
  expect(func.firstLetter).toHaveBeenCalledTimes(2);
});