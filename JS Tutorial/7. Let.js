/**
 * Let
 */

/**
 * Cannot be Redeclared
 */
let x = "John Doe";

let x = 0;
// SyntaxError: 'x' has already been declared


/**
 * Block Scope
 */
{
   let x = 2;
   // x CAN be used here
}
// x can NOT be used here


{
   var x = 2;
   // x CAN be used here
}
// x CAN be used here


/**
 * Redeclaring Variables
 */
var x = 10;
// Here x is 10

{
   var x = 2;
   // Here x is 2
}
// Here x is 2


let x = 10;
// Here x is 10

{
   let x = 2;
   // Here x is 2
}
// Here x is 10


/**
 * Redeclaring
 */
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
   let x = 2;    // Allowed
   let x = 3     // Not allowed
}

{
   let x = 2;    // Allowed
   var x = 3     // Not allowed
}


// ===========================

let x = 2;    // Allowed

{
   let x = 3;    // Allowed
}

{
   let x = 4;    // Allowed
}

carName = 'valvo'
var carName;
console.log(carName)