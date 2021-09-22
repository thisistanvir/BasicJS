/**
 * Sets
 */
const letters = new Set()

letters.add('a')
letters.add('b')
letters.add('c')

console.log(letters)

// Create a Set
const numbers = new Set();

// Create Variables
const a = 1;
const b = 2;
const c = 3;

// Add Variables to the Set
numbers.add(a);
numbers.add(b);
numbers.add(c);
console.log(numbers)


// forEach method
letters.forEach(function (value) {
   console.log(value)
})

console.log(letters.values())

// values method
for (const x of letters.values()) {
   console.log(x)
}