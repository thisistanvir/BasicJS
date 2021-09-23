/**
 * Type Conversion
 */

console.log('=========== String to Number ===================')
console.log(Number("3.14"))  // returns 3.14
console.log(Number(" "))      // returns 0
console.log(Number(""))        // returns 0
console.log(Number("99 88"))  // returns NaN

// number methods
let n = "13.5"
console.log(Number(n))
console.log(parseFloat(n))
console.log(parseInt(n))


// Unary + Operator
x = + n
console.log(x)

let y = 'jhon'
console.log(x = +y)

console.log('=========== Numbers to Strings ===================')
{
   let x = 15.55432
   console.log(String(x))    // returns a string from a number variable x
   console.log(String(123))      // returns a string from a number literal 123
   console.log(String(100 + 23))  // returns a string from a number from an expression

   console.log(x.toString())
   console.log((123).toString())
   console.log((100 + 23).toString())

   let y = 10e7
   console.log(y.toExponential())
   console.log(x.toFixed())
   console.log(x.toPrecision(4))
}

console.log('=========== Dates to Numbers ===================')

d = new Date();
console.log(Number(d))         // returns 1404568027739

console.log(d.getTime()) // returns 1404568027739


console.log('=========== Dates to String ===================')
{
   console.log(String(Date()))  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
   console.log(Date().toString())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
}


console.log('=========== Booleans to Numbers ===================')
console.log(Number(false))     // returns 0
console.log(Number(true))      // returns 1


console.log('=========== Booleans to String ===================')
console.log(String(false))      // returns "false"
console.log(String(true))       // returns "true"

console.log(false.toString())
console.log(true.toString())


console.log('=========== Automatic Type Conversion ===================')
console.log(5 + null)    // returns 5         because null is converted to 0
console.log("5" + null)  // returns "5null"   because null is converted to "null"
console.log("5" + 2)     // returns "52"      because 2 is converted to "2"
console.log("5" - 2)     // returns 3         because "5" is converted to 5
console.log("5" * "2")   // returns 10        because "5" and "2" are converted to 5 and 2


console.log('=========== Automatic String Conversion ===================')
const myVar = { name: "Fjohn" }
console.log(myVar.toString())  // toString converts to "[object Object]"

const myArray = [1, 2, 3, 4]
console.log(myArray.toString())     // toString converts to "1,2,3,4"

const myDate = new Date()
console.log(myDate.toString())      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"