/**
 * Iterables
 */
const name = "W3Schools";

for (const x of name) {
   console.log(x)
}

const letters = ["a", "b", "c"];

for (const x of letters) {
   console.log(x)
}

console.log('For set')
const sets = new Set(["a", "b", "c"]);

for (const x of sets) {
   console.log(x)
}


console.log('for Map')
const fruits = new Map([
   ["apples", 500],
   ["bananas", 300],
   ["oranges", 200]
]);

for (const x of fruits) {
   console.log(x)
}