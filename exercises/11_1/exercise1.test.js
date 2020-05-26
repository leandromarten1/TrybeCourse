const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
    
test('Testando se transforma letras minusculas em maiusculas', done => {
  uppercase('abc', (result) => {
    expect(result).toBe('ABC');
    done();
  });
  uppercase('pai', (result) => {
    expect(result).not.toBe('pai');
    done();
  });
  uppercase('trybe', (result) => {
    expect(result).toBe('TRYBE');
    done();
  });
})