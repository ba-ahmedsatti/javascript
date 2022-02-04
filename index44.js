// Exercise 44
// Create a new index44.js file
// Define a text variable and assign the following value: HELLO
// Define a result variable
// Get each char from the text variable and revert the text assigning it to the result variable
// At the end you should be able to show the following text: OLLEH
// Once you reverted the text, transform it to lowercase
// Show the final output: the final result is: olleh
// It kind of sound spanish, right?.. ole!!! (lol)

let text ='HELLO';
let result = text.slice(2);

console.log (result);

const text1 = 'JavaScript and Java are not the same';
const result1 = text.slice(1,20);

console.log(result1);

const result2 = text1.substring(3, 7);

console.log(result2); // JavaScript