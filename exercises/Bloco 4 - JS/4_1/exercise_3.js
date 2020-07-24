// Make a program that returns the largest of three numbers. 
// Define three variables at the beginning of the program with values ​​to be compared.

let num1 = 2;
let num2 = 4;
let num3 = 6;

if (num1 > num2 && num1 > num3){

    console.log("1: the number "+num1+" is greater than "+num2+" and "+num3);

}else if(num2 > num1 && num2 > num3){

    console.log("2: the number "+num2+" is greater than "+num1+" and "+num3);

}else if(num3 > num1 && num3 > num2){

    console.log("3: the number "+num3+" is greater than "+num1+" and "+num2);

}else {
    console.log("4: the numbers "+num1, num2, num3+" are equals");

}