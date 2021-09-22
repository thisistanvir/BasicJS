/**
 * typeof Operator
 */

console.log(typeof "John")                 // Returns "string"
console.log(typeof 3.14)                  // Returns "number"
console.log(typeof NaN)                 // Returns "number"
console.log(typeof false)               // Returns "boolean"
console.log(typeof [1, 2, 3, 4])              // Returns "object"
console.log(typeof { name: 'John', age: 34 })  // Returns "object"
console.log(typeof new Date())            // Returns "object"
console.log(typeof function () { })        // Returns "function"
console.log(typeof myCar)                // Returns "undefined" *
console.log(typeof null)                  // Returns "object"

console.log("=========== **** ===============")

console.log("John".constructor)          // Returns function String()  {[native code]}
console.log((3.14).constructor)                // Returns function Number()  {[native code]}
console.log(false.constructor)                // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor)            // Returns function Array()   {[native code]}
console.log({ name: 'John', age: 34 }.constructor) // Returns function Object()  {[native code]}
console.log(new Date().constructor)           // Returns function Date()    {[native code]}
console.log(function () { }.constructor)        // Returns function Function(){[native code]}


console.log("=========== **** ===============")

// function isArray(myArray) {
//    console.log(myArray.constructor.toString().indexOf('Array') > -1)
// }
isArray(['1', '2', '3'])

function isArray(myArray) {
   console.log(myArray.constructor === Array)
}

console.log("=========== **** ===============")

const myDate = new Date()
// function isDate(myDate) {
//    console.log(myDate.constructor.toString().indexOf('Date') > -1)
// }
isDate(myDate)

function isDate(myDate) {
   console.log(myDate.constructor === Date)
}

console.log("=========== **** ===============")

let cars = ['volvo', 'audi'];
cars = undefined;
console.log(typeof cars)


let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Now value is null, but type is still an object
console.log(person)

console.log("=========== **** ===============")

console.log(typeof undefined)           // undefined
console.log(typeof null)                // object

console.log(null === undefined)         // false
console.log(null == undefined)          // true