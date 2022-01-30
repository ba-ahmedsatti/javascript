// Exercise 41
// Create a new index41.js file
// Define a text1 variable and assign the following value: HELLO
// Define a text2 variable and assign the following value: javascript
// Define a text3 variable and assign the following value: WORLD
// Show the following output: hello JAVASCRIPT world
// Use console.log() & concat

let text1 = 'Hello';
let text2 = 'javascript';
let text3 = 'WORLD';
console.log(text1.concat( ` ${text2.toUpperCase()} ${text3.toLowerCase()}`));
console.log(text1.concat(text2.toUpperCase(),text3.toLowerCase()));
