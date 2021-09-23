/**
 * Bitwise Operations
 */

console.log((5).toString(2))
console.log((1).toString(2))

console.log((5).toString(2) & (1).toString(2)) // return 0001
console.log((5).toString(2) | (1).toString(2)) // return 0101
console.log(~((5).toString(2))) // return 1010

console.log(0101 << 1) // return 1010

console.log(0101 ^ 0001) // return 0100
console.log(0101 >> 1) //return 0010
console.log(0101 >>> 1) // return 0010