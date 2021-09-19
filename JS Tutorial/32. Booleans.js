/**
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
 */
console.log(Boolean(10 > 9)) // true


/**
 Everything With a "Value" is True

 100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14
 */



/**
 * Everything Without a "Value" is False
 * as known as Falsy value
 * 
 * if (false)
 * if (null)
 * if (undefined)
 * if (0)
 * if (-0)
 * if (0n)
 * if (NaN)
 * if ("")
 */
let x = 0
console.log(Boolean(x)) //false

let y = -0
console.log(Boolean(y)) //false

let z = "";
console.log(Boolean(z)); // returns false

// Undefined
let a;
console.log(Boolean(x)); // return false 

let b = null;
console.log(Boolean(b)); // returns false

let c = false
console.log(Boolean(c)) // return false

// NAM
let d = 100 / 'hello'
console.log(Boolean(d)) // return false
