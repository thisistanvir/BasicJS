/**
 * For In Loop
 * 
 * The JavaScript for in statement loops through the properties of an Object
 */
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
   console.log(person[x])
}

/**
 * for in loop also can use in Array
 * 
 * But do not use for in over an Array because it's order important
 */
const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
   console.log(numbers[x])
}

console.log('for forEach')
// forEach
numbers.forEach(function (value, index, array) {
   console.log(value)
})