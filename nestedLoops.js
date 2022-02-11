//  1. Use a nested loop to convert an array of number pairs into a single flattened array.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// let arrayOfArrays = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// let i = 0;

// let newArray = [];
// while (i < arrayOfArrays.length) {
//   let i2 = 0;
//   while (i2 < arrayOfArrays[i].length) {
//     newArray.push(arrayOfArrays[i][i2]);
//     i2++;
//   }
//   i++;
// }

// console.log(newArray);

//  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

// let array1 = ["a", "b", "c"];
// let array2 = ["d", "e", "f", "g"];
// let combinedArray = [];
// let i = 0;
// while (i < array1.length) {
//   let i2 = 0;
//   while (i2 < array2.length) {
//     combinedArray.push(array1[i] + array2[i2]);
//     i2++;
//   }
//   i++;
// }

// console.log(combinedArray);

//  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// let array = ["a", "b", "c", "d"];
// let i = 0;
// let newArray = [];
// while (i < array.length) {
//   let i2 = 0;
//   while (i2 < array.length) {
//     if (array[i] !== array[i2]) {
//       newArray.push(array[i] + array[i2]);
//     }
//     i2++;
//   }
//   i++;
// }

// console.log(newArray);

//  4. Use a nested loop to find the largest product of any two different numbers within a given array.
//     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// let array = [5, -2, 1, -9, -7, 2, 6];
// let largestProduct = 1;
// let i = 0;
// let product = 1;
// while (i < array.length) {
//   let i2 = 1;
//   while (i2 < array.length) {
//     if (i !== i2 && largestProduct < array[i] * array[i2]) {
//       largestProduct = array[i] * array[i2];
//     }
//     i2++;
//   }
//   i++;
// }

// console.log(largestProduct);

//  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// let numbers = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// let i = 0;
// let sum = 0;
// while (i < numbers.length) {
//   let i2 = 0;
//   while (i2 < numbers[i].length) {
//     sum += numbers[i][i2];
//     i2++;
//   }
//   i++;
// }

// console.log(sum);
////////////////forEach////////////////////////////////////////
// let sum = 0;
// numbers.forEach((array) => {
//   array.forEach((num) => {
//     sum += num;
//   });
// });

// console.log(sum);

//  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// let array1 = [1, 2];
// let array2 = [6, 7, 8];
// let newArray = [];

// array1.forEach((num) => {
//   array2.forEach((number) => {
//     newArray.push(num + number);
//   });
// });

// console.log(newArray);

//  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// let array = [2, 8, 3];
// let newArray = [];

// array.forEach((number) => {
//   array.forEach((num) => {
//     newArray.push(number * num);
//   });
// });

// console.log(newArray);

//  8. Use a nested loop to find the largest sum of any two different numbers within an array.
//     For example, [1, 8, 3, 10] becomes 18.

// let array = [1, 8, 3, 10];
// let biggestSum = 0;

// array.forEach((number) => {
//   array.forEach((num) => {
//     if (number !== num && biggestSum < number + num) {
//       biggestSum = number + num;
//     }
//   });
// });

// console.log(biggestSum);

//  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

let numbers = [2, 5, 3, 1, 0, 7, 11];
let sumOfTen = [];

numbers.forEach((number) => {
  numbers.forEach((num) => {
    if (number + num === 10 && number !== num) {
      sumOfTen = [num, number];
    }
  });
});

console.log(sumOfTen);

// 10. Use a nested loop to convert an array of string arrays into a single string.
//     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

// SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8
