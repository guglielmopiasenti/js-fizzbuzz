console.log("JS OK");

// targeting number element from the DOM

const number = document.getElementById("number"); 

// I set up a `for` loop to iterate from 1 to 100.
for (let i = 1; i <= 100; i++) {

    // if the current number is divisible by both 3 and 5 using the condition.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

        // check if the number is divisible by 3 using the condition.
    } else if (i % 3 === 0) {
        console.log("Fizz");

        // check if the number is divisible by 5 using the condition.
    } else if (i % 5 === 0) {
        console.log("Buzz");

        // If none of the above conditions are met, print the current number.
    } else {
        console.log(i);
    }    
}   