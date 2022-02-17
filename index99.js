// Exercise 99
// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output


for(let number = 0; number <= 100; number++)
{
   if (number %2 === 0 && number <= 20){
        console.log(number);
   }
}  