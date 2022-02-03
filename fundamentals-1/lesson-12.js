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


/* 
  ASSIGNMENT:
  -----------
1 - Declare a variable called 'isIsland' and set its value according to your
    country. The variable should hold a Boolean value. Also declare a variable
    'language', but don't assign it any value yet
    
2 - Log the types of 'isIsland', 'population', 'country' and 'language'
    to the console
*/

let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); 