//  1. Start with an array of numbers and create a new array with each number times 3.
//     For example, [1, 2, 3] becomes [3, 6, 9].

//WHILE LOOP//////////////////////////////////////////////////////
// function timesThree(array) {
//   let i = 0;
//   while (i < array.length) {
//     array[i] *= 3;
//     i++;
//   }
//   console.log(array);
// }

// timesThree([1, 2, 3]);

//EACH LOOP///////////////////////////////////////////////////////

// function timesThree(array) {
//   let newArr = [];
//   array.forEach((element) => {
//     element *= 3;
//     newArr.push(element);
//   });
//   console.log(newArr);
// }

// timesThree([1, 2, 3]);

//MAP/////////////////////////////////////////////////////////////
// let array = [1, 2, 3];

// let newArr = array.map((num) => num * 3);

// console.log(newArr);

/////////////////////////////////////////////////////////////////////

//  2. Start with an array of strings and create a new array with each string upcased.
//     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

//WHILE/FOR LOOP////////////////////////////////////////////////////////

// function upcase(array) {
//   let newArr = [];
//   for (let index = 0; index < array.length; index++) {
//     const word = array[index].toUpperCase();
//     newArr.push(word);
//   }
//   console.log(newArr);
// }

// upcase(["hello", "goodbye"]);

//FOR EACH LOOP/////////////////////////////////////////////////////////

function upCase(array) {
  let newArr = [];
  array.forEach((element) => {
    newArr.push(element.toUpperCase());
  });
  console.log(newArr);
}

upCase(["hello", "goodbye"]);

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

//  4. Start with an array of numbers and create a new array with each number plus 7.
//     For example, [1, 2, 3] becomes [8, 9, 10].

//  5. Start with an array of strings and create a new array with each string's length.
//     For example, ["hello", "goodbye"] becomes [5, 7].

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

//  7. Start with an array of numbers and create a new array with each number divided by 2.
//     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

//  8. Start with an array of strings and create a new array with each string's first letter only.
//     For example, ["hello", "goodbye"] becomes ["h", "g"].

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//     For example, [1, 2, 3] becomes ["1", "2", "3"].

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
