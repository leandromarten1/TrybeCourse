

let salary = 4000;
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
if (salary > 4664.68){

}