// Exercise 111
// Create a new index111.js file
// Define a even function that has one numeric parameter and returns a boolean value
// This function must validate if the number passed as parameter is an even number or not (true or false)
// Call this function using the following parameters: 2, 5, 3, 24, 12
// If the number is even show the following message: %number% is even
// Else show the following message: %number% is odd

const evenFunc = function (inputNumber) {
        if (inputNumber % 2 == 0) {
            console.log(inputNumber + " is an even number");
        } else {
            console.log(inputNumber + " is an odd number");
        }
    }

    evenFunc(20)