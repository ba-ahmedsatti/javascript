// Exercise 43
// Create a new index43.js file

// Define a text variable with the following value: game of thrones

// Define 3 variables with the following names:

// firstChar
// secondChar
// thirdChar
// Assign the firstChar the first char from the text variable

// Assign the secondChar the char at index 5 from the text variable

// Assign the thirdChar the char at index 8 from the text variable

// Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar

// Transform the result variable to uppercase

// Show the result value as output: the final result is: GOT

// What happens when you use an invalid index number (for example, 1000)? Try it!

let text = 'game of thrones';
let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let result = firstChar + secondChar + thirdChar;
// console.log(result.toUpperCase());
console.log('the final result is: ', result.toUpperCase());
