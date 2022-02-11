// 1

// numbers = [1, 2, 4, 2]
// doubled_numbers = []
// numbers.map { |number| doubled_numbers << number * 2 }
// p doubled_numbers

const array1 = [1, 4, 9, 16];
const map1 = array1.map((num) => num * 2);
console.log(map1);

// 2

// items = [
//   {id: 1, body: 'foo'},
//   {id: 2, body: 'bar'},
//   {id: 3, body: 'foobar'}
// ]

// ids = []
// items.map { |item| ids << item[:id]}
// p ids

const items = [
  { id: 1, body: "foo" },
  { id: 2, body: "bar" },
  { id: 3, body: "foobar" },
];

const ids = items.map((id) => id["id"]);
console.log(ids);

//3

var fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

var array = fruits.map((object) => [object["name"], object["color"]]);
console.log(array);
var object = {};
array.forEach((element) => (object[element[0]] = element[1]));

console.log(object);

//4

// def reverse_a_string(string)
//   index = string.length - 1
//   new_string = []
//   while index > -1
//     new_string << string[index]
//     index -=1
//   end
//   new_string.join

// end

function reverseAString(string) {
  var index = string.length - 1;
  var newString = "";
  while (index > -1) {
    newString += string[index];
    index--;
  }
  return newString;
}
console.log(reverseAString("hello"));

//5

function longestWord(string) {
  var sentence = string.split(" ");
  var longWord = "";
  sentence.forEach((word) => {
    if (word.length >= longWord.length) {
      longWord = word;
    }
  });
  return longWord;
}

console.log(longestWord("how are you today"));

//6

// var nums = [1, 2, 4, 2];
// var evenNums = [];
// nums.forEach((num) => {
//   if (num % 2 === 0) {
//     evenNums.push(num);
//   }
// });
// return evenNums;

var nums = [1, 2, 4, 2];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);

//7
var movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];

// p movies.select { |movie_hash| movie_hash[:rating] < 4.0 }

var badMovies = movies.filter((movie) => movie["rating"] < 4);
console.log(badMovies);

//8

movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];

var bMovies = movies.filter((movie) => movie["title"].indexOf("B") !== -1);
console.log(bMovies);

//9
