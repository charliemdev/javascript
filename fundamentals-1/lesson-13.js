// Lesson 13 - let, const and var
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


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;


/*
  ASSIGNMENT:
  -----------
1 - Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    
2 - Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    
3 - Try to change one of the changed variables now, and observe what happens
*/

language = "English";
const country = "United Kingdom";
const continent = "Europe";
const isIsland = true;
isIsland = false; 

