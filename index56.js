// Exercise 56
// Create a new index56.js file
// Copy and paste the code from exercise 53
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator


const number = 10;


if (number%2 === 0)
{
    console.log(`${number} is an even number`);
} else
{
    console.log(`${number} is an odd number`);
}

const numberRefactor = 11;

const conditionalTernaryOperator = (numberRefactor%2 === 0) ? console.log(`${numberRefactor} is an even number`) : console.log(`${numberRefactor} is an odd number`);