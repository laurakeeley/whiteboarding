// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

function sum(array, k) {
  let i = 0;
  while (i < array.length) {
    let i2 = 1;
    while (i2 < array.length) {
      if (array[i] + array[i2] === k) {
        console.log(array[i], array[i2]);
        i2++;
      } else {
        i2++;
      }
    }
    i++;
  }
}

sum([10, 15, 3, 7], 17);

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
