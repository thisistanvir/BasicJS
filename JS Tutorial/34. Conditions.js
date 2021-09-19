/**
 * Conditional Statements
 * 
 * if
 * else if
 * else
 * switch
 */
let age = 18
// if
if (age > 18) {
   console.log('you are adult')
}

// If else
if (age < 18) {
   console.log('your are younger')
} else {
   console.log('you are adult')
}

// else if
if (age < 18) {
   console.log('your are younger')
} else if (age >= 18 && age < 30) {
   console.log('you are adult')
} else {
   console.log('you are old')
}


// switch
switch (new Date().getDay()) {
   case 0:
      console.log('Sunday')
      break;
   case 1:
      console.log('Monday')
      break;
   case 2:
      console.log('Tuesday')
      break
   case 3:
      console.log('Wednesday')
      break
   case 4:
      console.log('Thursday')
      break
   case 5:
      console.log('Friday')
      break
   case 6:
      console.log('Saturday')
      break
   default:
      console.log('Looking forward to Weekend')

}