const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:

const addAllnumbers = (arr) => {
  let sum = 0;
  for (let i=0; i<arr.length; i+=1){
    sum += arr[i];
  }
  return sum;
}

//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
