////////////
// PART 1 //
////////////

//  * STEP 1
//    Create two variables, each containing a value between 1 and 100.

//  * STEP 2
//    Create a function called 'add' that returns the result of adding the two variables together.

//  * STEP 3
//    Create a function called 'process' that accepts the name of a callback function as a parameter, and returns the result
//    provided by the callback function.

//  * STEP 4
//    Write a statement that calls the 'process' function, passing it the 'add' function as the callback parameter.
//    In your browser, verify that the expected value is returned at the console.

//  * STEP 5
//    Create a new function called 'subtract' that returns the result of subtracting the second variable from the first.

//  * STEP 6
//    Write a statement that calls the 'process' function, passing it the 'subtract' function as the callback parameter.
//    In your browser, verify that the expected value is returned at the console.


/*
let number1 = 26;
let number2 = 5;


function add() {
    return number1 + number2;
}
  
function process(callback) {
    let result = callback();
    console.log(result);
}

process(add); // should return 31 at the console

function subtract() {
    return number1 - number2;
  }

process(subtract); // should return 21 at the console
*/



////////////
// PART 2 //
////////////

//  * STEP 7
//    Update your add and subtract functions to accept 2 parameters each, called num1 and num2. Update the code within
//    each function to perform calculations on the parameters rather than on the global variables.

//  * STEP 8
//    Update your process function to accept 3 parameters each, called num1, num2, and callback. update the code within
//    the function to pass the values of num1 and num2 when calling the callback function.

//  * STEP 9
//    Update the first statement that calls the 'process' function, passing it the numbers 38 and 18 and the 'add' function 
//    as the callback parameter. In your browser, verify that the value 56 is returned at the console.

//  * STEP 10
//    Update the second statement that calls the 'process' function, passing it the numbers 38 and 18 and the 'subtract'
//    function as the callback parameter. In your browser, verify that the value 20 is returned at the console.


function add(num1, num2) {
    return num1 + num2;
}

function process(num1, num2, callback) {
    let result = callback(num1, num2);
    console.log(result);
}

process(38,18,add); // should return 56 at the console

function subtract(num1, num2) {
    return num1 - num2;
  }

process(38,18,subtract); // should return 20 at the console
