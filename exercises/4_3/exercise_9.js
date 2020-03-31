// Exercise 9
let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

//console.log(teste[i].length);


function maisLetras(array){
  let maiorNome = array[0];
 
  for (i = 0; i > array.length; i+=1){
    if (array[i].length > maiorNome.length){
      maiorNome = array[i];
    }
  }
  return maiorNome;

}


console.log(maisLetras(teste));
