// Lesson 10 - Values and Variables 
/* 
  NOTE: 
  -----
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
  NOTE:
  -----
# Number - Floating point numbers, used for decimals and integers
# String - Sequence of characters, used for text
# Boolean - Logical type that can only be true or false, used for taking decisions
# Undefined - Value taken by a variable that is not yet defined (empty variable)
# Null - Also an empty variable
# Symbol - Value that is unique and cannot be changed
# BigInt - Larger integers than the Number type
*/

/*
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
*/

// Lesson 12 - let, const and var
/*
  NOTE:
  -----
# Values in a const cannot be changed
# EXAMPLE: Someone's age changes each year but the year they were born can never change
# Const variables cannot be empty
# Use const on default, only use let if certain the variable value will change
# Have as little variable mutations as possible as it can cause bugs 
# Var should be avoided - old way to define variables before ES6.
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
*/

// Lesson 13 - Basic Operators 
/*
  NOTE:
  -----
# 
*/

// Math operators
const now = 2037;
const ageJonas = now - 1998;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators 
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators 
console.log(ageJonas > ageSarah); // >, <, >=. <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

