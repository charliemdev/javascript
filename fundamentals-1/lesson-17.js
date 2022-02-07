// Lesson 17 - Strings and Template Literals 

/* 
  NOTE: 
  -----
# Use backticks always so you don't need to think which one to use ( ` )
*/

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);