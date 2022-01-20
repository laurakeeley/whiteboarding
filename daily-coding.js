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
//

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
