// Exercise 7

function highValue(array){
  let maiorValor = array[0];
  for (n in array){
    if (array[n] > maiorValor)
      maiorValor = n;
  }
  return maiorValor;
}

console.log(highValue([2, 3, 6, 7, 10, 1]));