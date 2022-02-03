// Lesson 14 - Basic Operators 
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


/*
  ASSIGNMENT:
  -----------
1 - If your country split in half, and each half would contain half the population,
    then how many people would live in each half?
    
2 - Increase the population of your country by 1 and log the result to the console.

3 - Finland has a population of 6 million. Does your country have more people than
    Finland?
    
4 - The average population of a country is 33 million people. Does your country
    have less people than the average country?
    
5 - Based on the variables you created, create a new variable 'description'
    which contains a string with this format: 'Portugal is in Europe, and its 11 million
    people speak Portuguese'.
*/

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description1);