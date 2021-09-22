/**
 * Break and Continue
 */

for (let i = 0; i < 10; i++) {
   if (3 === i) { break; }
   console.log('the number is ' + i + '\n')
}

console.log('For continue')
for (let i = 0; i < 10; i++) {
   if (3 === i) { continue; }
   console.log('the number is ' + i + '\n')
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
   console.log(cars[0] + '\n');
   console.log(cars[1] + '\n');
   break list;
   console.log(cars[2] + '\n');
   console.log(cars[3] + '\n');
}