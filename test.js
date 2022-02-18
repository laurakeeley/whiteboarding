function mergeLists(list1, list2) {
  let i = 0;
  // let i2 = 0;
  let finalList = [];
  while (i < list1.length) {
    if (list1[i] < list2[i]) {
      finalList.push(list1[i]);
      finalList.push(list2[i]);
      console.log(finalList);
    } else {
      finalList.push(list2[i]);
      finalList.push(list1[i]);
      console.log(finalList);
    }
    i++;
  }
  console.log(finalList);
}

mergeLists([1, 2, 4], [1, 3, 4]);

// print each element of each list
// print the first element of each list
// compare the first 2 elements of each list, print larger
// shovel larger number into new Array
// hold onto next element, compare, print
