// Começe a praticar TDD fazendo uma função que valida que um array de números não possui múltiplos de 3, 5, 7 e 11.




function validaArr (arr){
  for(let i=0; i<arr.length;i+=1){
    if(arr[i] !== 0){
      if(arr[i] % 3 === 0){return `${arr[i]} é multiplo de 3`};
      if(arr[i] % 5 === 0){return `${arr[i]} é multiplo de 5`};
      if(arr[i] % 7 === 0){return `${arr[i]} é multiplo de 7`};
      if(arr[i] % 11 === 0){return `${arr[i]} é multiplo de 11`};   
    }
  }
  return `Esse ${arr} é válido`;
}

//console.log(validaArr([0, 1, 2, 4, 8, 13, 16, 17, 19, 23]));

// Faça com TDD uma função que recebe um número natural n e retorna todos os números primos de 0 a esse número.

// verificar se não é negativo
// retornar os n numeros primos (divisiveis por 1 e n)

const assert = requires('assert');

assert()