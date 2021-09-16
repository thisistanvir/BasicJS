// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ পর্যন্ত প্রিন্ট করতে পারি?
// 1. Write a function that can print any random number between any two given numbers (including them).
function getRandInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandInteger(1, 6))


// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি? 
// 3. How can you order names of students in your class sequentially?
const students = ['shamim', 'tanvir', 'walid', 'mousumi']
console.log(students.sort())


// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রম অনুসারে সাজাতে পারি? 
// 2. How can you order roll numbers of students in your class sequentially?
const roll = [2, 4, 5, 12, 8, 9, 19, 32]

console.log(roll.sort(function (a, b) { return a - b }))


// কোন একটা সাল Leap Year কিনা তা বের করতে পারি কিভাবে?
// 4. Write a function that can tell us whether an year is a leap year or not.
function isLeapYear(year) {
   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(`${year} is a leap Year.`)
   } else {
      console.log(`${year} is not a leap Year.`)
   }
}
isLeapYear(2024)

// কোন sentence এ কতগুল Vowel আছে তা নির্ণয় করা যায়? 
// 5. How would you determine the number of vowels in a sentence?
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function countVowel(sentence) {
   let count = 0
   const letters = Array.from(sentence)

   letters.forEach(function (value) {
      if (vowel.includes(value)) {
         count++
      }
   })
   return count

}
console.log(countVowel('I Love Bangladesh'))


// কোন Array থেকে কিভাবে duplicate নাম্বার গুলকে বের করে আনতে পারি?
// 6. How would you extract the duplicate numbers in an array?
// 7. How would you extract the unique numbers in an array?

const number = ['2', '4', '6', '4', '5', '5', '9']

const duplicator = number.filter(function (value, index, array) {
   return array.indexOf(value) !== index;
})

console.log(duplicator)