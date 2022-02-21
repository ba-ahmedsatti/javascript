// Exercise 104
// Create a new index104.js file
// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times

let i;
let fib = [];
let fibonacci =function()
{
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= 11; i++)
    {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
}

fibonacci();
fibonacci();
fibonacci();
