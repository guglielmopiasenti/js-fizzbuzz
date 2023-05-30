# Exercise description

Delivery:

Write a program that prints the numbers from 1 to 100 to the console:
for multiples of 3 print “Fizz” instead of the number
for multiples of 5 print "Buzz" instead of the number.
For numbers that are both multiples of 3 and 5, print "FizzBuzz" in place of the number.

## BONUS 1:

Create a container element in the DOM and then fill it with your own elements via JS.
You can use various techniques (template literals, innerHTML, append, etc)

## BONUS 2:

Apply different styles to the elements added to the DOM in BONUS 1, depending on whether the value entered is a number, a fizz, a buzz or a fizzbuzz.

# Procedure:

1. Set up a `for` loop to iterate from 1 to 100.
2. For each iteration:
   - Check if the current number is divisible by both 3 and 5 using the condition.
   - If it is, print "FizzBuzz" to the console.
   - If not, check if the number is divisible by 3 using the condition.
   - If it is, print "Fizz" to the console.
   - If not, check if the number is divisible by 5 using the condition.
   - If it is, print "Buzz" to the console.
   - If none of the above conditions are met, print the current number.
3. Repeat the above steps for all numbers from 1 to 100.

Executing this program will print the numbers from 1 to 100 in the console, with the replacements "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.

## Bonus part

1. Create an HTML element, `<div>`, with an ID of "container" as the container in the DOM.
2. Define a function, `createAndAppendElement`, that creates a new `<div>` element, sets its text content and class, and appends it as a child to the container using the `appendChild()` method.
3. reusing and enlarging the previous loop: Iterate from 1 to 100 using a `for` loop.
   - Inside the loop, check if the current number is divisible by both 3 and 5.
   - If true, call `createAndAppendElement` with the text "FizzBuzz" and the class "fizzbuzz".
   - If not, check if the number is divisible by 3.
   - If true, call `createAndAppendElement` with the text "Fizz" and the class "fizz".
   - If not, check if the number is divisible by 5.
   - If true, call `createAndAppendElement` with the text "Buzz" and the class "buzz".
   - If none of the above conditions are met, call `createAndAppendElement` with the current number and the class "number".
