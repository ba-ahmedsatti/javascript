// Exercise 53
// Create a new index53.js file
// Copy and paste the code from exercise 50
// Refactor the code so it match the new requirements:
// If number is not even then show the following message: %number% is an odd number

const number = 11;
if (number%2 === 0)
{
    console.log(`${number} is an even number`);
} else
{
    console.log(`${number} is an odd number`);
}

// 1. example:

// let number=10;
// if(number%2==0){
//     console.log(number+" is an even number")
// }
// else{
//     console.log(number+" is an odd number")
// }

// 2. example:

// for(let count =0; count<=100; count++)
// {
//     (count %2 === 0) ?
//     console.log(`${count} is even`):console.log(`${count} is odd`);
    
// }