/**
 * Maps
 */
const fruits = new Map([
   ["apples", 500],
   ["bananas", 300],
   ["oranges", 200]
]);

fruits.set("apples", 50);
console.log(fruits)

console.log(fruits.get('apples'))
console.log(fruits.size)
console.log(fruits.delete('apples'))
console.log(fruits.has('apples'))

console.log('forEach')
fruits.forEach(function (value, key) {
   console.log(key + ' = ' + value)
})

console.log(fruits.entries())
for (let x of fruits.entries()) {
   console.log(x)
}
