// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

// iterate through array
// if number is less than 100, put number into new array

// [99, 101, 88, 4, 2000, 50]

// true
// new array = [99, 88, 4, 50]

// function underOneHundred(numbers) {
//   var under100 = [];
// numbers.forEach((number) => {
//   if (number < 100) {
//     under100.push(number);
//   }
// });
//   return under100;
// }

// console.log(underOneHundred([99, 101, 88, 4, 2000, 50]));

/////////////////////////////////////////////////////////////////////////

// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

// iterate through Array
// take each number and multiply by 2

// [4, 2, 5, 99, -4]

// new array = [8, 4, 5, 198, -8]

// function doubledNumbers(numbers) {
//   var doubled = [];
//   numbers.forEach((num) => {
//     doubled.push(num * 2);
//   });
//   return doubled;
// }

// console.log(doubledNumbers([4, 2, 5, 99, -4]));

/////////////////////////////////////////////////////////////////////////

// Write a function that returns the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12]
// Output: 20

// set variable equal to the first number in the Array.
// compare that number to each number next
// if next number is greater than variable, variable become equal to greater number.
// if number is less than current variable, variable stays the same

// [5, 17, -4, 20, 12]

// var = 5
// is 17 greater than 5? yes
// var = 17
// is -4 greater than 17? No
// var = 17
// is 20 greater than 17? yes
// var = 20
// is 12 greater than 20? no, var = 20
// output should be 20.

// function greatestNum(numbers) {
//   let biggestNum = numbers[0];
//   numbers.forEach((num) => {
//     if (num > biggestNum) {
//       biggestNum = num;
//     }
//   });
//   return biggestNum;
// }

// console.log(greatestNum([5, 17, -4, 20, 12]));

////////////////////////////////////////////////////////////////////

// Write a function that accepts an array of numbers and returns the product of all the numbers.

// Input: [1, 2, 3, 4]
// Output: 24

// set a variable to 1;
// multiply that by the next Element
// multiply that product by the next Element, cont through whole Array.apply

// [1, 2, 3, 4]

// 1 * 1 = 1
// 1*2 = 2
// 2*3 = 6
// 6*4 = 24

// function product(numbers) {
//   let totalProduct = 1;
//   numbers.forEach((num) => {
//     totalProduct *= num;
//   });
//   return totalProduct;
// }

// console.log(product([1, 2, 3, 4]));

/////////////////////////////////////////////////////////////////////////////////////////

// Given an array, write a function that returns an array that contains the original array’s values in reverse.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// start at the last element of the Array
// put that into new Array
// subract one to the 2nd to last element
// put that in the new Array

// [1, 2, 3, 4, 5]

// 5
// 4
// 3
// 2
// 1

// function reverseArray(numbers) {
//   let i = numbers.length - 1;
//   let reverse = [];
//   while (i >= 0) {
//     reverse.push(numbers[i]);
//     i--;
//   }
//   return reverse;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));

////////////////////////////////////////////////////////////////////

// Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:

// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

// Input:
// [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]

// Output:
// [2, 3, 1, 2, 2, 1, 5, 2, 2]

// [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2];

// index = 3;

// 2, 3;

// put first number into new Array
// hold that number in variable, move index over that many spaces, put that number into new Array
// hold 2nd number in a variable, move index that many places.

// function selectNums(numbers) {
//   let index = 0;
//   // let iterator = numbers[0];
//   let newArray = [];
//   while (index < numbers.length) {
//     newArray.push(numbers[index]);
//     index += numbers[index];
//   }
//   return newArray;
// }

// console.log(
//   selectNums([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2])
// );

/////////////////////////////////////////////////////////////////////////////////

// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

// iterate through each char and if '$' is found, return true.

// function findIt(string) {
//   let splitString = string.split("");
//   splitString.forEach((char) => {
//     if (char === "$") {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   });
// }

// // findIt("i hate $ but i love money i know i know im crazy");
// findIt("abcdefghijklmnopqrstuvwxyz");

////////////////////////////////////////////////////////////////////////////////////////

// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

// split string into Array.
// iterate through
// if index cannot be divisible by 2, it will be capitalized.Array

// function everyOther(string) {
//   let stringArr = string.split("");
//   let upCase = [];
//   let i = 0;
//   while (i < stringArr.length) {
//     if (i % 2 !== 0) {
//       upCase.push(stringArr[i].toUpperCase());
//       i++;
//     } else {
//       upCase.push(stringArr[i]);
//       i++;
//     }
//   }
//   return upCase.join("");
// }

// console.log(everyOther("hello, how are your porcupines today?"));

/////////////////////////////////////////////////////////////////////////////////////////////

// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

// split string into array of individual characters
// first var holds onto first element of array
// if first character does not match 2nd character, variable becomes 2nd element
// 2nd element is compared to 3rd element.
// if 2nd element does not match 3rd element, variable becomes 3rd element.

// function doubleChars(string) {
//   let stringArr = string.split("");
//   let i = 0;
//   // let i2 = i + 1;
//   while (i < stringArr.length) {
//     if (stringArr[i] === stringArr[i + 1]) {
//       return stringArr[i];
//     } else {
//       i++;
//     }
//   }
// }

// console.log(doubleChars("abcdefghhijkkloooop"));

////////////////////////////////////////////////////////////////////////////////////

// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

// compare use reverse method on string if they're equal, palindrome is true.

// function isPalindrome(string) {
//   let palindrome = true;
//   if (string === string.split("").reverse().join("")) {
//     return palindrome;
//   } else {
//     palindrome = false;
//   }
//   return palindrome;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("balogna"));

//////////////////////////////////////////////////////////////////////////////////////

// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

// create arrays from both strings
// print out each letter, matching indeces
// if chars match print MATCH!
// add a count var.
// if chars don't match count +1

// function differentChars(string1, string2) {
//   let count = 0;
//   let string1Arr = string1.split("");
//   let string2Arr = string2.split("");
//   let i = 0;
//   while (i < string1Arr.length) {
//     if (string1Arr[i] !== string2Arr[i]) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }

// console.log(differentChars("ABCDEFG", "ABCDEFG"));
// console.log(differentChars("ABCDEFG", "ABCXEOG"));

////////////////////////////////////////////////////////////////////////////////

// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

// create array from string, print array
// print the last word in the array
// put the last word in the array into a new array
// iterate through array backwards, print each word
// join array into string and print.

// function reverseStrings(string) {
//   let stringArr = string.split(" ");
//   let i = stringArr.length - 1;
//   let reverseArr = [];
//   while (i >= 0) {
//     reverseArr.push(stringArr[i]);
//     i--;
//   }
//   return reverseArr.join(" ");
// }

// console.log(reverseStrings("popcorn is so cool isn't it yeah i thought so"));

//////////////////////////////////////////////////////////////////////////////////////

// Write a function that returns whether a given number is a prime number.

// function primeNumber(number) {
//   let divisor = 2;
//   let count = 0;
//   while (divisor <= number) {
//     if (number % divisor === 0) {
//       count++;
//     }
//     divisor++;
//   }
//   if (count === 1) {
//     return number + " is a prime number!";
//   } else {
//     return number + " can be divided evenly " + count + " times.";
//   }
// }

// console.log(primeNumber(17));
// console.log(primeNumber(20));
// console.log(primeNumber(19));
// console.log(primeNumber(3));
// console.log(primeNumber(37));

////////////////////////////////////////////////////////////////////////////////////

// Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

// print the Number
// if the number is divisible by 3 print fizz
// if the number is divisible by 5 print buzz
// if the number is divisible by both pring fizzbuzz

// function fizzBuzz(number) {
//   let n = 1;
//   while (n <= number) {
//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log("FIZZBUZZ");
//     } else if (n % 3 === 0) {
//       console.log("FIZZ");
//     } else if (n % 5 === 0) {
//       console.log("BUZZ");
//     } else {
//       console.log(n);
//     }
//     n++;
//   }
// }

// fizzBuzz(30);

//////////////////////////////////////////////////////////////////////////////////////

// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

// start with array [0, 1]
// 3rd element is sum of first 2. 4th is sum of 2, 3.

// function fibonacci(number) {
//   let beginning = [0, 1];
//   let i = 0;
//   while (i < number) {
//     beginning.push(beginning[i] + beginning[i + 1]);
//     i++;
//   }
//   return beginning[number - 1];
// }

// console.log(fibonacci(9));

///////////////////////////////////////////////////////////////////////

// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.
//
// function leapYear(year) {
//   if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//     return year + " is a leap year!";
//   }
// }

// console.log(leapYear(2000));
// console.log(leapYear(1900));
// console.log(leapYear(1996));
// console.log(leapYear(1997));
// console.log(leapYear(1904));

//////////////////////////////////////////////////////////////////////

// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.

// function conjecture(n) {
//   let steps = 0;
//   while (n > 1) {
//     if (n % 2 === 0) {
//       n = n / 2;
//       steps++;
//     } else {
//       n = n * 3 + 1;
//       steps++;
//     }
//     console.log(n);
//   }
//   console.log("Number of steps: " + steps);
// }

// conjecture(20);

////////////////////////////////////////////////////////////////

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome(num1, num2) {
  while (num1 >= 99) {
    let palindrome = num1 * num2;

    if (
      palindrome.toString().split("").reverse().join("") ===
      palindrome.toString()
    ) {
      console.log(palindrome);
    } else {
      parseInt(num1);
      num1--;
    }
  }
}

console.log(largestPalindrome(999, 999));

// let num = 9734;
