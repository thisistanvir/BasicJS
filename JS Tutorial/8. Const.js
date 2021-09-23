/**
 * Const
 * 
 * Variables defined with const cannot be Redeclared.
 * Variables defined with const cannot be Reassigned.
 * Variables defined with const have Block Scope.
 */

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


/**
 * Must be Assigned
 * JavaScript const variables must be assigned a value when they are declared:
 */
//  correct
const PI = 3.14159265359;

// incorrect
const PI;
PI = 3.14159265359;


/**
 * Constant Array
 */

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


cars = ["Toyota", "Volvo", "Audi"];    // ERROR


/**
 * Constant Object
 *
 */

// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

car = { type: "Volvo", model: "EX60", color: "red" };    // ERROR


/**
 * Block Scope
 *
 * Declaring a variable with const is similar to let when it comes to Block Scope.
 */