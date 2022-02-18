// Exercise 101
// Create a new index101.js file
// Define a function named showUser that will output the following data:
// Your name
// Your age
// Your phone number
// Your street
// Your postal code
// If you're married or not (boolean)


let showUser = function(name = 'ahmed', age = 22, phone = '12345678', street = '101', postal = 'A1B-2C3', status = true)
{
    console.log(`Your name: ${name}`);
    console.log(`Your age: ${age}`);
    console.log(`Your phone number: ${phone}`);
    console.log(`Your street: ${street}`);
    console.log(`Your postal code: ${postal}`);
    console.log(`Married status: ${status}`);
}
showUser();