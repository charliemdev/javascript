// Lesson 23 - Logical Operators

/* 
  NOTE: 
  -----
# 
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense);                 // NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired); // OR