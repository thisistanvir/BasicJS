/**
 * For Loop
 */

let cars = ['A', 'B', 'C', 'D', 'E']

for (let i = 0; i < cars.length; i++) {
   console.log(cars[i])
}
console.log('Done Step 1')

for (let i = 0, len = cars.length; i < len; i++) {
   console.log(cars[i])
}
console.log('Done Step 2')

let i = 0,
   len = cars.length;
for (; i < len; i++) {
   console.log(cars[i])
}
console.log('Done Step 3')

let j = 0,
   length = cars.length;
for (; ; j++) {
   if (j < length) {
      console.log(cars[j])
   } else {
      break
   }
}
console.log('Done Step 4')



for (let i = 0, len = cars.length; i < len;) {
   console.log(cars[i])
   i++
}
console.log('Done Step 5')

// using var loop
var x = 5
for (var x = 0; x < 10; x++) {
   console.log(x)
}

console.log('This is', x)

// using let loop
let y = 5
for (let y = 0; y < 10; y++) {
   console.log(y)
}
console.log('Let loop is', y)