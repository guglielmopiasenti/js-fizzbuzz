console.log("JS OK");

// Function tocreate and add an element to the container in the DOM
function createAndAppendElement(text, className) {
    let element = document.createElement("div");
    element.textContent = text;
    element.className = className;
    document.getElementById("container").appendChild(element);
  }

// I set up a `for` loop to iterate from 1 to 100.
for (let i = 1; i <= 100; i++) {

    // if the current number is divisible by both 3 and 5 using the condition.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        // If true, call `createAndAppendElement` with the text "FizzBuzz" and the class "fizzbuzz".
        createAndAppendElement("FizzBuzz", "fizzbuzz");


        // check if the number is divisible by 3 using the condition.
    } else if (i % 3 === 0) {
        console.log("Fizz");
        // If true, call `createAndAppendElement` with the text "Fizz" and the class "fizz".
        createAndAppendElement("Fizz", "fizz");


        // check if the number is divisible by 5 using the condition.
    } else if (i % 5 === 0) {
        console.log("Buzz");
        // If true, call `createAndAppendElement` with the text "Buzz" and the class "buzz".
        createAndAppendElement("Buzz", "buzz");


        // If none of the above conditions are met, print the current number.
    } else {
        console.log(i);
        // Call `createAndAppendElement` with the current number and the class "number".
        createAndAppendElement(i, "number");
    }    
}   