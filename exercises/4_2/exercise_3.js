// Exercicio 3

let n = 5;
let ast = "*";
let linha = "";
let position = n;

for (let i=0; i < n; i+=1){
   for (let j=0; j < n; j+=1){
      if (j  < position - 1){
         linha += " ";
      }else{
         linha += ast;
      }
   }
   position -= 1;
   console.log(linha);
   linha = "";
}