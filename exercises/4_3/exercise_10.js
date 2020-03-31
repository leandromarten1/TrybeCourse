
let numeros = [2, 3, 2, 5, 8, 2, 3];

function repetido(array){
  let contador = 0;
  let maisRepete = 0;
  let index = 0;
  for(let i = 0;  i< array.length; i+=1){
    for (let n = 0; n < array.length; n+=1){
      if(array[i] === array[n]) {
        contador = contador + 1;
      }      
    
  }
  return contador;

}

repetido(numeros);