// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

const assert = require('assert')

// escreva sum abaixo
function sum(...input){ 
  let soma = 0; 
  for(let i of input){ 
      soma += i; 
  } 
  return soma; 
}

//Pode ser feito com Reduce também.

const sum1 = (...input) => input.reduce((count, number) => count + number, 0);

assert.equal(sum(), 0)
assert.equal(sum1(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum1(1, 2, 3, 4), 10)
    
