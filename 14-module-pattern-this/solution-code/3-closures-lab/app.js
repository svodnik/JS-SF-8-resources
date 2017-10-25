/*
    1) Create a function that accepts a number as a parameter, adds the number to an array, and logs the array value to the console.
    2) Modify your function so it returns another function, using a closure to reference the array created by the first function.
        You should then be able to pass additional values to the returned function and have them added to the original array.
    3) Test your code by creating two different arrays using the main function, assigning each a different variable name.
        You should then be able to call each of these new functions to add values to each of the arrays independently, without affecting each other's values.
*/

function createArray(newNum) {
    let anArray = [newNum];
    return function(newNum) {
        anArray.push(newNum);
        console.log(anArray);
    }
}

let array1 = createArray(5);
let array2 = createArray(6);
array1(7); // [5, 7]
array2(8); // [6, 8]
array1(9); // [5, 7, 9]
array2(10); // [6, 8, 10]

