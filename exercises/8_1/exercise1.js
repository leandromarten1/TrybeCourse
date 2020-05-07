
const fatorial = (number) => {
  let fator = 1;
  for (let i = 1; i <= number; i += 1){
    return fator = fator * i;
  }
}

const fatorialIf = (n) => {
  if (n === 0 || n === 1){
    return 1;
  }else{
    return n * fatorial (n - 1);
  }
}

const fatorialArrow = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1);

console.log(fatorial(3));
console.log(fatorialIf(4));
console.log(fatorialArrow(5));