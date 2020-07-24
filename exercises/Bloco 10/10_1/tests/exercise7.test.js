const thereIsValue = require('../exercise7');

describe('Verifica se variável está definida', () => {
  test('Testa se não é undefined', () => {
    expect(typeof thereIsValue).not.toBe(undefined);
  });
}); 