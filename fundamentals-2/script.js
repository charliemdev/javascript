'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log(`I can drive`);
} */

// -------------------------------------------------------------- Lesson - Functions
/* function logger() {
  console.log(`My name is jonas`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

// -------------------------------------------------------------- Lesson - Function Declarations VS. Expressions
// Function declaration
/* function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
  // return 2037 - birthYear 
}
const age1 = calcAge1(1998); */

// Function expression
/* const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1998);

console.log(age1, age2); */

// -------------------------------------------------------------- Lesson - Arrow Functions
// Arrow Function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

// -------------------------------------------------------------- Lesson - Functions Calling Other Functions
/* function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}
console.log(fruitProcessor(2, 3)); */

// -------------------------------------------------------------- Lesson - Reviewing Functions
/* const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName}'s retirement has already started!`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1998, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike')); */

// -------------------------------------------------------------- Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team
     as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
     to the console, together with the victory points, according to the rule above.
     Example: "Koalas win (30 vs. 13)"
  4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
  5. Ignore draws this time
  
Test data:
??? Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
??? Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
??? To calculate average of 3 values, add them all together and divide by 3
??? To check if number A is at least double number B, check for A >= 2 * B.
  Apply this to the team's average scores
*/

/* const calcAverage = (a, b, c) => (a + b + c) / 3; 

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koals win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
}
checkWinner(scoreDolphins, scoreKoalas); */

// -------------------------------------------------------------- Lesson - Introduction to Arrays
/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */

// -------------------------------------------------------------- Lesson - Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements to end
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Adds element to start
friends.unshift('John'); 
console.log(friends);

// Remove last element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove first element
friends.shift();
console.log(friends);