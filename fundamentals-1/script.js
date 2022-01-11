// Lesson 10 - Values and Variables 
/* 
  Notes 
  ------
# Variable names can't start with numbers
# Variable names can only use underscores and dollar signs (symbols)
# To use new / function variables, use _ or $ before hand ($function)
# Variable names should not start with capital letters
# Variables all in uppercase are saved for those that'll never change, e.g. PI
# Use good names for variables, myFirstJob/myCurrentJob over job1/job2
*/

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"; 

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/



// Lesson 11 - Data Types
/*
  Notes
  ------
# Number - Floating point numbers, used for decimals and integers
# String - Sequence of characters, used for text
# Boolean - Logical type that can only be true or false, used for taking decisions
# Undefined - Value taken by a variable that is not yet defined (empty variable)
# Null - Also an empty variable
# Symbol - Value that is unique and cannot be changed
# BigInt - Larger integers than the Number type
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);