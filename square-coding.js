// // function solution(n, a) {
// //   let b = [];
// //   let i = 0;
// //   while (i < n) {
// //     a = a || 0;
// //     b[i] = a[i - 1] + a[i] + a[i + 1];
// //     i++;
// //   }
// //   console.log(b);
// // }

// // solution(5, [4, 0, 1, -2, 3]);

// // // Codewriting

// // // Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// // // Array a mutates into a new array b of length n.
// // // For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// // // If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
// // // Example

// // // For n = 5 and a = [4, 0, 1, -2, 3], the output should be solution(n, a) = [4, 5, -1, 2, 1].

// // // b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// // // b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// // // b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// // // b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// // // b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
// // // So, the resulting array after the mutation will be [4, 5, -1, 2, 1].

// // // Input/Output

// // // [execution time limit] 4 seconds (js)

// // // [input] integer n

// // // An integer representing the length of the given array.

// // // Guaranteed constraints:
// // // 1 ≤ n ≤ 103.

// // // [input] array.integer a

// // // An array of integers that needs to be mutated.

// // // Guaranteed constraints:
// // // a.length = n,
// // // -103 ≤ a[i] ≤ 103.

// // // [output] array.integer

// // // The resulting array after the mutation.

// // // [JavaScript] Syntax Tips

// // // // Prints help message to the console
// // // // Returns a string
// // // function helloWorld(name) {
// // //     console.log("This prints to the console when you Run Tests");
// // //     return "Hello, " + name;
// // // }

// // ///////////////////////////////////////////////////////////////

// // Task 2 of 4
// // 0:32:40
// // Codewriting

// // Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

// // Example

// // For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].

// // Here are the number of times each digit appears in the array:

// // 0 -> 0
// // 1 -> 1
// // 2 -> 2
// // 3 -> 2
// // 4 -> 1
// // 5 -> 2
// // 6 -> 0
// // 7 -> 1
// // 8 -> 1
// // The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5. So the answer is [2, 3, 5].

// // Input/Output

// // [execution time limit] 4 seconds (js)

// // [input] array.integer a

// // An array of positive integers.

// // Guaranteed constraints:
// // 1 ≤ a.length ≤ 103,
// // 1 ≤ a[i] < 100.

// // [output] array.integer

// // The array of most frequently occurring digits, sorted in ascending order.

// // [JavaScript] Syntax Tips

// // // Prints help message to the console
// // // Returns a string
// // function helloWorld(name) {
// //     console.log("This prints to the console when you Run Tests");
// //     return "Hello, " + name;
// // }

// // ///////////////////////////////////////////////////////////////////////////////////////////////

// // Task 3 of 4
// // 0:32:09
// // Codewriting

// // A text editor is a type of computer program that edits plain text. It consists of a string with a cursor. In the initial state, the string is empty with the cursor at the beginning of the string. Some modern text editors have a clipboard manager - they save a history of copied text.

// // Your task is to simulate the working process of a text editor with a simple clipboard manager which can handle six types of operations:

// // TYPE <text> - insert <text> after the current position of the cursor, where <text> consists of at most 50 characters including English letters, digits, whitespaces, and symbols .,?!-. The cursor moves to the end of the inserted text.
// // SELECT <start_index> <end_index> - select the substring of the current text [text[start_index] ... text[end_index]] (inclusive indices, 0-based) of length end_index - start_index + 1. It is guaranteed that the indices are valid. The cursor changes its position to the end of the selected area.
// // MOVE_CURSOR <offset> - change the cursor's current position. The <offset> specifies the direction and the value change - if it is negative the cursor moves to the left, and if it's positive the cursor moves to the right. At all times, the cursor is either located at the beginning of the string (before the first character), between two characters, or at the end of the string (after the last character) - the cursor should always be within the text bounds. If the <offset> is larger than the cursor can move, the cursor will move in that direction as much as it can. If there is a selected area, it should be cleared after this operation.
// // COPY - add the text from the selected area to the clipboard. If there is no selected area then do nothing.
// // PASTE <steps_back> - insert the copied text from the clipboard manager. The number <steps_back> specifies which of the stored copied texts to insert. If <steps_back> is 1 then insert the last copied text, if it is 2 then insert the text copied before the last, and so on. It <steps_back> is greater than the clipboard history size then ignore this operation. The cursor moves to the end of the inserted text.
// // PASTE - do the same as if the operation is PASTE 1.
// // Note: If a selected area is not empty and the next operaion is either TYPE or PASTE then the following updating process is expected during the TYPE or PASTE operation:

// // Delete the selected text.
// // Insert the new text in the place of the deleted text.
// // The cursor position should move to the end of the new text.
// // You are given operations, an array of strings where each is an operation of one of the six types above. Your task is to find the resulting text after performing the given operations.

// // Example

// // For operations = ["TYPE Great Britain is the capital of London", "SELECT 0 12", "COPY", "SELECT 32 37", "COPY", "PASTE 2", "SELECT 0 12", "PASTE", "MOVE_CURSOR 32", "TYPE !"], the output should be solution(operations) = "London is the capital of Great Britain!".

// // Initially the text is empty,
// // After the "TYPE Great Britain is the capital of London" operation, the text is "Great Britain is the capital of London|" (where the | symbol represents the cursor position),
// // After the "SELECT 0 12" operation, the selected text is "Great Britain", the cursor is moved to the end of the selected area "Great Britain| is the capital of London",
// // After the "COPY" operation, the clipboard is ["Great Britain"], the cursor doesn't move, and the selected area stays the same,
// // After the "SELECT 32 37" operation, the selected text is "London", the cursor is moved to the end of the selected area "Great Britain is the capital of London|",
// // After the "COPY" operation, the clipboard is ["Great Britain", "London"], the cursor doesn't move, and the selected area stays the same,
// // After the "PASTE 2" operation, since there is a selected text, it is deleted and replaced with the text "Great Britain" because it is 2 positions back in the clipboard, the cursor stays after the inserted text, so the text is "Great Britain is the capital of Great Britain|",
// // After the "SELECT 0 12" operation, the selected text is "Great Britain", the cursor is moved to the end of the selected area "Great Britain| is the capital of Great Britain",
// // After the "PASTE" operation, since there is a selected text, it is deleted and replaced with the text "London" because it is the last copied text in the clipboard, the cursor stays after the inserted text, so the text is "London| is the capital of Great Britain",
// // After the "MOVE_CURSOR 32", the cursor moves 32 symbols forward, so the text is "London is the capital of Great Britain|",
// // After the "TYPE !" operation, the text is "London is the capital of Great Britain!|",
// // So the final string is "London is the capital of Great Britain!".
// // Input/Output

// // [execution time limit] 4 seconds (js)

// // [input] array.string operations

// // A sequence of operations. It's guaranteed that all the operations satisfy the format described above.

// // Guaranteed constraints:
// // 1 ≤ operations.length ≤ 103.

// // [output] string

// // The resulting text after performing the given sequence of operations.

// // [JavaScript] Syntax Tips

// // // Prints help message to the console
// // // Returns a string
// // function helloWorld(name) {
// //     console.log("This prints to the console when you Run Tests");
// //     return "Hello, " + name;
// // }

// // ///////////////////////////////////////////////////////////////////

// Task 4 of 4
// 0:31:10
// Codewriting

// You're developing a new programming language with some unusual features for strings! Among these is a method that returns the longest palindrome that can be formed with the characters of a given string.

// Given a string s, your task is to find this longest possible palindrome. You may use any number of the characters from s, and arrange them in any order (so long as it results in a palindrome).

// If there are multiple longest palindromes that can be formed, return the one among them that's lexicographically smallest.

// Example

// For s = "aaabb", the output should be solution(s) = "ababa".

// There are two possible palindromes of length 5 that can be obtained ("ababa" and "baaab"), but "ababa" is lexicographically smaller, thus it is the answer.

// For s = "aaabbbcc", the output should be solution(s) = "abcacba".

// It's not possible to form a palindrome of length 8, but from several palindromes of length 7, "abcacba" is the lexicographically smallest, thus it is the answer.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// The given string.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] string

// The lexicographically smallest palindrome with maximal length that can be built from the given string s.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }
