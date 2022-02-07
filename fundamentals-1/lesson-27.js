// Lesson 27 - The Conditional (ternary) Operator

/* 
  NOTE: 
  -----
# Condition ? IF : ELSE
# Isn't a replacement for if/else statements, only used for quick decisions
*/

const age = 23;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

// Does the exact same as the code above
let drink2;
if(age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);


console.log(`i like to drink ${age >= 18 ? `wine` : `water`}`);