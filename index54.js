// Exercise 54
// Create a new index54.js file
// Copy and paste the code from exercise 51
// Refactor the code so it match the new requirements:
// If the username or password don't match show the following message: Sorry, there has been a problem, please try it again.


const username = 'pepe2017';
const password = '12345';

if (username === 'pepe2017' && password === '12344')
{
    console.log('Logged in user, show user home page');
    }else
    {
        console.log('Sorry, there has been a problem, please try it again.');
    }