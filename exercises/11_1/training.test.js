// Gera um falso positivo, pois o jest não sabe que precisa esperar o timeout.

// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!') // Não apresenta essa mensagem.
//   }, 500);
// });

//-----------------------------------------------------------------
// Apresenta msg de erro, pois o callback DONE foi chamado

// test("Não deveria passar!", done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//     done();
//   }, 500);
// });

//-----------------------------------------------------------------
const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})

