/**
 * Errors
 * 
 * Try
 * Catch
 * Throw
 * Finally
 */

try {
   addalert('welcome guest');
} catch (err) {
   console.log(err.message)
}

console.log('================= ********* ====================')


let x = '12'
try {
   if (x == "") throw "empty";
   if (isNaN(x)) throw "not a number";
   x = Number(x);
   if (x < 5) throw "too low";
   if (x > 10) throw "too high";
}
catch (err) {
   console.log(err)
}

console.log('================= ********* ====================')


let y = '12'
try {
   if (y == "") throw "is empty";
   if (isNaN(y)) throw "is not a number";
   y = Number(y);
   if (y > 10) throw "is too high";
   if (y < 5) throw "is too low";
}
catch (err) {
   console.log(y + ' ' + err)
}
finally {
   y = '';
}