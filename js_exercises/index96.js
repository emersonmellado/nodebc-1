// Exercise 96
// Create a new index96.js file
// Write the code to show numbers bettwen 0 and 10000 using for
// The numbers need to be incremented by 10
// Example:
// 0
// 10
// 20
// 30
// and so on ...
// 10000

let number = 0;

while (number < 10000) {
    number++
    if (number % 10 === 0) {
        console.log(number);
    }
}