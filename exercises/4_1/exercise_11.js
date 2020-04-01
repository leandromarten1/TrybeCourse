

let salary = 3000;
let inssTax = null;
let irTax = null;
let liquidSalary = null;

// Calculate Inss Tax
if (salary <= 1556.94) {
    inssTax = salary * 0.08;
}else if (salary <= 2594.92) {
    inssTax = salary * 0.09;    
}else if (salary <= 5189.82) {
    inssTax = salary * 0.11;
}else{
    inssTax = 570.88;
}

// Salary - inssTax
salary -= inssTax;

// Calculate IR tax
if (salary >= 4664.68){
    irTax = (salary * 0.275) + 869,36;
}else if(salary>= 3751.06){
    irTax = (salary * 0.225) + 636.13;
}else if(salary >= 2826.66){
    irTax = (salary * 0.15) + 354.80;
}else if(salary >= 1903.99){
    irTax = (salary * 0.075) - 142.80;
}else irTax = 0;

// Salary - irTax
salary -= irTax;

console.log("Salary is: "+salary);