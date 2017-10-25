/*  

1. Write an IIFE function that counts up to an end time in seconds that's passed as a parameter.
    For each second that passes, the function should log the number of elapsed seconds to the console (1, then 2, then 3, etc.).
    The function will automatically execute and count up every second until it reaches the specified parameter value.
    Use the setTimeout function to count up.
    Hint: a second is the timer passed * 1000 (milliseconds).

    Suggestions for getting started: 
    1. Write a function that logs a value to the console after 1 second has elapsed.
    2. Next make that function self-executing.
    3. Then figure out how to make that function repeat a set number of times.

2. Convert your code to use the `var` keyword instead of the `let` keyword to create the counter variable, and observe the results. Why have the results changed?
   HINT: Think about the difference between the `var` and `let` keywords.

3. Update your function using the `var` keyword for the counter variable so it works just like the `let` version from earlier.
   HINT: How could closures be useful here?

*/



(function timedCountDown(endTime) { // IIFE that takes a single parameter
  // loop as long as the counter variable is less than or equal to the endTime parameter
  for (var i = 1; i <= endTime; i++) {
      // runCountDown increments one second each time it is run
      (function runCountDown(j){ // accepts a parameter
          setTimeout( function timer(){
              console.log( j ); // logs the value of the parameter
          }, j*1000 ); // sets a delay equal to the parameter value in seconds
          // the value of j does not change; instead, this IIFE creates a closure
          // over the current value of j
      })( i ); // value of i passed to IIFE
  }
})(5); // argument passed into IIFE when it is invoked
