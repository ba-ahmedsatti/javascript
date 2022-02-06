// Exercise 50
// Create a new index50.js file
// Define a number variable and assign the following value: 10
// If number is even then show the following message: %number% is an even number
// Try changing the value to an odd number to see what happens


const number = 10;
if (number === 10)
{
    console.log(`${number} is an even number`);
}


for(let count =0; count<=100; count++)
{
    (count %2 === 0) ?
    console.log(`${count} is even`):console.log(`${count} is odd`);
    
}