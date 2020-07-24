// Exercise 8

function indiceMenor(array){
  let menorValor = array[0];
  for (n in array){
    if (array[n] < menorValor)
      menorValor = n;
  }
  return menorValor;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));