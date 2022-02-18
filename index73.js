// Exercise 73
// Create a new index73.js file
// Show the following output using while:
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *


let number = 13;
let stars = '*************';

while(number > 0)
{
    let result = stars.substring(0, number);
    console.log(result);
    number--;
}