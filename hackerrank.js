// function addTwoNumbers(l1, l2) {
//   let i = 0;
//   let linked = [];
//   while (i < l1.length) {
//     let num = l1[i] + l2[i];
//     if (NaN) {
//       num = 0;
//     } else if (num >= 10) {
//       num = num.toString().split("");
//       linked[i] = parseInt(num[1]);
//       l1[i + 1] += parseInt(num[0]);
//     } else {
//       linked[i] = num;
//     }
//     i++;
//   }
//   console.log(linked);
// }

// // addTwoNumbers([2, 4, 3], [5, 6, 4]);
// addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

// function reverse(x) {
//   //     convert to string in order to split, split into array
//   x = x.toString().split("");
//   // reverse array
//   x = x.reverse();
//   //     last element '-', move to front
//   if (x[x.length - 1] === "-") {
//     let lastEle = x.pop();
//     x.unshift(lastEle);
//   } else if (x[0] === "0") {
//     // if 1st ele is 0, remove
//     x = x.shift();
//   }
//   x = x.join("");
//   return x;
// }

// console.log(reverse(-123));

// function removeElement(nums, val) {
//   nums.forEach((num) => {
//     if (num === val) {
//       nums.splice(nums.indexOf(num), 1);
//     }
//   });
//   return nums;
// }

// console.log(removeElement([3, 2, 2, 3], 3));

function birthday(s, d, m) {
  var segments = 0;
  s.forEach ((seg) => {
      var subArr = s.slice(seg, m);
      var sum = subArr.reduce(:+);
      if (sum === d) {
          segments++;
      }
  })
  console.log(segments);
}
