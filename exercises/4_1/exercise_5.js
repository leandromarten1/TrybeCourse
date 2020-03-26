// Make a program that defines three variables with the values ​​of the three internal angles of a triangle.
// Return true if the angles represent the angles of a triangle and false otherwise.

let angleOne = 40;
let angleTwo = 60;
let angleThree = 80;
let isTriangle = false;

// Sum Angles
let sumAngle = angleOne + angleTwo + angleThree;

// Comparing  
if (sumAngle == 180){
    isTriangle = true;
    console.log(isTriangle);
}
else{
    console.log(isTriangle);
}
