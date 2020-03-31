let n = 5;

function somaTotal(numero){

  let soma = 0;

  for(let i = 0; i <= numero; i+=1){
    soma = i + soma;
    
  }
  return soma;
  

}
console.log(somaTotal(n));
