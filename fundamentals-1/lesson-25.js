// Lesson 25 - The Switch Statement

/* 
  NOTE: 
  -----
# 
*/

const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  
  case 'tuesday':
    console.log('preparing theory videos');
    break;
    
  case 'wednesday':
  case 'thursday': 
    console.log('write code exmaples');
    break;
    
  case 'friday':
    console.log('Record videos');
    break;
    
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
    
  default: 
    console.log('Not a valid day');
}

// This does the exact same as the above code
if(day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('preparing theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('write code exmaples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}