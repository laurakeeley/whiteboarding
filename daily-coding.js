// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// function sum(array, k) {
//   let i = 0;
//   while (i < array.length) {
//     let i2 = 1;
//     while (i2 < array.length) {
//       if (array[i] + array[i2] === k) {
//         console.log(array[i], array[i2]);
//         i2++;
//       } else {
//         i2++;
//       }
//     }
//     i++;
//   }
// }

// sum([10, 15, 3, 7], 17);

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//#2//

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//create a function that takes in an array
//loop through array, likely a while loop (not each, we want to skip one)
//multiply each number by the next number, not including current number
//shovel into array at skipped index
//produce new array

// function productsSkipIndex(array) {
//   let product = 1;
//   let i = 0;
//   while (i < array.length) {
//     product *= array[i];
//     i++;
//   }
//   let index = 0;
//   while (index < array.length) {
//     array[index] = product / array[index];
//     index++;
//   }
//   console.log(array);
// }

// productsSkipIndex([1, 2, 3, 4, 5]);
// productsSkipIndex([3, 2, 1]);

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//#4//

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

//sort array smallest to largest
//create a 'missing' variable
//if number are neg or zero or duplicates, remove numbers from array
//iterate through array if next number is previous numb +1, move on.
//if next number is not prev num +1 that becomes the missing number.
//return missing number

// function missingNumber(array) {
//   array.sort();
//   array.forEach((number) => {
//     if (number <= 0) {
//       array.shift(number);
//     }
//   });
//   let i = 0;
//   let missing = 0;
//   while (i < array.length) {
//     if (array[i] === array[i + 1] - 1) {
//       i++;
//     } else {
//       missing = array[i] + 1;
//     }
//   }
//   console.log(missing);
// }

// missingNumber([3, 4, -1, 1]);
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

////Problem 18////////////

// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

/////Problem 20 [Easy]//////////////////////////////////////////////////////////////////////

// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

//////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

// function sort(array) {
//   let i = 1;
//   array.forEach((letter) => {
//     while (i < array.length) {
//       if (letter === "G" && array[i] === "B") {
//       }
//     }
//   });
// }

// sort(["G", "B", "R", "R", "B", "R", "G"]);

// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

// For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

// function lonelyinteger(a) {
//   var i = 0;
//   while (i < a.length) {
//     var i2 = i + 1;
//     while (i2 < a.length) {
//       if (a[i] === a[i2]) {
//         i++;
//       } else {
//         i2++;
//       }
//     }
//   }
//   console.log(a[i]);
// }

// lonelyinteger([1, 2, 3, 4, 3, 2, 1]);

// Write a function that takes in two arrays of numbers and returns all the numbers that appear in both arrays.

// input: [1,3,6,9], [1,2,5,9]
// ouput: [1,9]

// see if the first number matches, print true
// if first num matches print that number
// if first num matches push that num into new array
// compare first num in first array to each num in 2nd array, any matches, push into new array
// loop through first array and compare each number to 2nd array

// function sameNums(nums1, nums2) {
//   var matches = [];
//   nums1.forEach((num) => {
//     nums2.forEach((num2) => {
//       if (num === num2) {
//         matches.push(num);
//       }
//     });
//   });
//   console.log(matches);
// }

// sameNums([1, 3, 6, 9], [1, 2, 5, 9]);

// Write a function that takes in an array of numbers and returns the largest product of any two numbers in the array.

// [1, 7 ,8, 9, 3, 1];
// output: 17

// compare first number to every other number
// print out each product of each sum - first number compared to each number
// store product of first 2 numbers compare to product of each other number
// compare sum of each of the first two numbers to each other sum, change if greater

// [1, 7 ,8, 9, 3, 1]
//           _  _

// 17

// function maxSum(arr) {
//   var i = 0;
//   var i2 = i + 1;
//   var max = 0;
//   while (i < arr.length) {
//     if (arr[i] + arr[i2] > max) {
//       max = arr[i] + arr[i2];
//     }
//     i++;
//   }
//   return max;
// }

// console.log(maxSum([1, 7, 8, 9, 3, 1]));

function lonelyinteger(a) {
  var unique = 0;
  var i = 0;
  while (i < a.length) {
    var i2 = i + 1;
    while (i2 < a.length) {
      if (a[i] === a[i2]) {
        a.splice(i2, 1);
        a.splice(i, 1);
      }
      i2++;
    }
    if (a[i] !== a[i2]) {
      unique = a[i];
    }
  }
  return unique;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
