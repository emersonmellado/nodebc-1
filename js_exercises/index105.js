// Exercise 105
// Create a new index105.js file
// Define a meaningOfLife function
// The meaningOfLife returns the number 42
// Show the following message as output: The meaning of life is: %meaningOfLife% (use a template)
// In this exercise you need to call the meaningOfLife() function inside the template placeholder


function meaningOfLife(){
    return 42;
}

message = 'The meaning of life is: ';

console.log(message + meaningOfLife());