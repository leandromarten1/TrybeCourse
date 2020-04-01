// Make simple functions

function sum(a, b){
let result = a + b;

return result;

}

function subtraction(x, y){
  let result = x - y;

  return result;
}

function multiplication(a, b){
  let result = a * b;

  return result;
}

function division(a, b){
  let result = a / b;

  return result;
}

function evenOrOdd(a, b){
  let result = a % b;
  if(result === 0){
    console.log('is Even');
  }else{
    console.log('is Odd');
  }
  
  return result;
}

console.log(sum(4, 8));
console.log(subtraction(10, 5));
console.log(multiplication(3, 3));
console.log(division(234, 2));
console.log(evenOrOdd(10, 5));
