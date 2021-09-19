/**
 * Comparison Operators
 * 
 * == equal to
 * === triple equal to (value & type)
 * != not equal to
 * !== not triple equal to (value & type)
 * > greater than
 * < less than
 * <= less than equal
 * >= greater than equal
 * */
let x = 5
let y = '5'

console.log(x == y)
console.log(x === y)
console.log(x != y)
console.log(x !== y)
console.log(x > y)
console.log(x < y)
console.log(x <= y)
console.log(x >= y)


/**
 * Logical Operators
 *
 * && AND operator
 * || OR operator
 * ! NOT operator
 */
if (x > 1 && x < 10) {
   console.log('this is right')
} else {
   console.log('this is not right')
}

if (x == y || x >= y) {
   console.log('this is right')
} else {
   console.log('this is not right')
}

/**
 * Conditional (Ternary) Operator
 * 
 * variablename = (condition) ? value1:value2 
 */

let age = '18'

console.log((age >= 18) ? 'You are an Adult' : 'You are Younger')


age = Number(age)

if (isNaN(age)) {
   console.log('input is not a number')
} else {
   console.log((age >= 18) ? 'You are an Adult' : 'You are Younger')
}