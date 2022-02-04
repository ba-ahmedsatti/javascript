// Exercise 45
// Create a new index45.js file
// Define a playerName variable with the following value: Darian Durant is lame
// Define a teams variable with the following value: BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers
// Define a message variable with the following value: Regina is the best Canadian city, Go Riders
// Use the slice method to get the following words or phrases from the previous variables:
// Daran Durant is
// riders
// the best
// , Go
// Use a template variable to create the final result
// Change the first riders character to be Capitalized
// Create all the variables that you might need to accomplish this objective
// The final output must be: DARIAN DURANT is the best Riders player, Go Riders!!

// 'fun'.toUpperCase()

let playerName = 'Darian Durant is lame';
let teams = 'BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders, Winnipeg Blue Bombers';
let teamsArray = teams.split(', ');
console.log(teamsArray);

let message = 'Calgary is the best Canadian city, Go stampeders';
let result = playerName.slice(0, 16);
let result1 = message.slice(38);
let result2 = message.slice(11, 19);
let result3 = message.slice(33, 37);

let capitalized = message.charAt(38).toUpperCase();

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(capitalized);




