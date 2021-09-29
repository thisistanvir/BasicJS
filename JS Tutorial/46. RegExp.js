/**
 * Regular Expressions
 */

// let text = "Visit W3Schools! by W3School";
// // let n = text.search("W3Schools");
// // let n = text.search(/w3schools/i); // regular expression with modifier (i)
// console.log(n)


// let text = 'love Microsoft, by Microsoft'
// // console.log(text.replace('Microsoft', 'W3Schools')) 
// console.log(text.replace(/microsoft/ig, 'W3Schools')) //regular expression with modifier (ig)

// m
// let text = "Is  th\nis it?"
// console.log(text.replace(/is/igm, 'IS'))

// [abc] find between the brackets
// let text = "Is this all there is?";
// let result = text.match(/[i]/ig);
// console.log(result)


// [1-4] find any digit between the brackets
// let text = "123456789";
// let result = text.match(/[1-4]/g);
// console.log(result)


// (red|green) Find any of the alternatives separated with |
// let text = "red, green, red, green, gren, green, blue, yellow";
// let result = text.match(/(red|green)/g);
// console.log(result)

// find digit
// let text = "Give 100%!";
// let result = text.match(/\d/g);
// console.log(result)


// find whitespace
// let text = "Is this all there is?";
// let result = text.match(/\s/g);
// console.log(result)

// Search for the characters "LO" in the beginning of a word in the phrase:
// let text = "HELLO, LOOK AT YOU!";
// let result = text.match(/\bYO/)
// console.log(result)

// find unicode characters 
// let text = "Visit W3Schools. Hello World!";
// let result = text.match(/\u0057/g);
// console.log(result)


// test()

// const pattern = /e/
// result = pattern.test('The best things in life are free!')
// console.log(result)

// console.log(/e/.test("The best things in life are free!"))


// exec()
console.log(/e/.exec("The best things in life are free!"))